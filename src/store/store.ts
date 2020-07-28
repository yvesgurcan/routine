import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import routinesStore from './reducers/routines';

const store = createStore(
    combineReducers({
        routinesStore
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
