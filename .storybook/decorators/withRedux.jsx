import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { adminReducer, adminSaga, USER_LOGOUT } from 'ra-core';
// import store from './redux/createStore';

const createReactAdminStore = ({ authProvider, dataProvider, history }) => {
    const reducer = combineReducers({
        admin: adminReducer,
        router: connectRouter(history),
    });
    const resettableAppReducer = (state, action) =>
        reducer(action.type !== USER_LOGOUT ? state : undefined, action);

    const saga = function* rootSaga() {
        yield all(
            [
                adminSaga(dataProvider, authProvider),
                // add your own sagas here
            ].map(fork)
        );
    };
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers =
        (process.env.NODE_ENV === 'development' &&
            typeof window !== 'undefined' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true,
                traceLimit: 25,
            })) ||
        compose;

    const store = createStore(
        resettableAppReducer,
        {
            /* set your initial state here */
        },
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history)
                // add your own middleware here
            )
            // add your own enhancers here
        )
    );
    sagaMiddleware.run(saga);
    return store;
};

const dataProvider = {
    introspect: Promise.resolve({ data: {}, customRoutes: [] }),
};

const authProvider = () => Promise.resolve();
const history = createHashHistory();

const withRedux = storyFn => (
    <Provider
        store={createReactAdminStore({
            authProvider,
            dataProvider,
            history,
        })}
    >
        {storyFn()}
    </Provider>
);
// const withRedux = storyFn => <Provider store={store}>{storyFn()}</Provider>;

export default withRedux;
