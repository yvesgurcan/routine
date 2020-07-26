import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../src/views/Home';
import AddRoutine from '../src/views/AddRoutine';
import Settings from '../src/views/Settings';

test('Home shows Today heading', () => {
    const { getByRole } = render(<Home />);
    expect(getByRole('heading')).toHaveTextContent('Today');
});

test('AddRoutine shows Add Routine heading', () => {
    const { getByRole } = render(<AddRoutine />);
    expect(getByRole('heading')).toHaveTextContent('Add Routine');
});

test('Settings shows Settings heading', () => {
    const { getByRole } = render(<Settings />);
    expect(getByRole('heading')).toHaveTextContent('Settings');
});

test('Settings shows Offline access setting', () => {
    const { getByText } = render(<Settings />);
    expect(getByText('Offline access')).toBeInTheDocument();
});
