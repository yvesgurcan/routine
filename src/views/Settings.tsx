import React, { Fragment, useState, useEffect } from 'react';

import Title from '../components/Title';

const isServiceWorkerRegistered = async (
    serviceWorker: ServiceWorkerContainer
) => {
    if (serviceWorker) {
        const registrations = await serviceWorker.getRegistrations();
        return registrations.length > 0;
    }

    return false;
};

const registerServiceWorker = (serviceWorker: ServiceWorkerContainer) => {
    serviceWorker.register('/service-worker.js');
};

const unregisterServiceWorker = async (
    serviceWorker: ServiceWorkerContainer
) => {
    if (serviceWorker) {
        const registrations = await serviceWorker.getRegistrations();
        for (let registration of registrations) {
            registration.unregister();
        }
    }
};

export default () => {
    const [offlineAccessEnabled, setOfflineAccessEnabled] = useState(false);

    useEffect(() => {
        async function getServiceWorkerRegistration() {
            const serviceWorkerRegistered = await isServiceWorkerRegistered(
                navigator.serviceWorker
            );
            setOfflineAccessEnabled(serviceWorkerRegistered);
        }
        getServiceWorkerRegistration();
    });

    return (
        <Fragment>
            <Title>Settings</Title>
            <label>
                <input
                    type="checkbox"
                    checked={offlineAccessEnabled}
                    onChange={async () => {
                        const updatedOfflineAccessEnabled = !offlineAccessEnabled;
                        if (updatedOfflineAccessEnabled) {
                            registerServiceWorker(navigator.serviceWorker);
                        } else {
                            unregisterServiceWorker(navigator.serviceWorker);
                        }
                        setOfflineAccessEnabled(updatedOfflineAccessEnabled);
                    }}
                />
                Offline access
            </label>
        </Fragment>
    );
};
