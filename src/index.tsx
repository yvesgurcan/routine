import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Menu from './components/Menu';

import Home from './views/Home';
import AddRoutine from './views/AddRoutine';
import Settings from './views/Settings';

const View = styled.div`
    max-width: 800px;
    min-height: 100vh;
    padding: 1rem;
    background: black;
    box-sizing: border-box;
    margin: auto;
`;

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        color: white;
        background: rgb(80, 80, 80);
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;

ReactDOM.render(
    <HashRouter>
        <Fragment>
            <GlobalStyles />
            <View>
                <Menu />
                <Switch>
                    <Route path="/settings" component={Settings} />
                    <Route path="/new" component={AddRoutine} />
                    <Route path="/" component={Home} />
                </Switch>
            </View>
        </Fragment>
    </HashRouter>,
    document.getElementById('app')
);
