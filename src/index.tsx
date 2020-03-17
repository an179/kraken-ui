import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore, Reducer } from 'redux';
import { tickerReducer } from './redux/reducers/DataUpdateReducer';
import { Provider } from 'react-redux';
import {KrakenBlotterState, TickerDataState} from './redux/state/StateTypes'

const initalTickerDataState: TickerDataState = []

const initialState: KrakenBlotterState = {
    tickerData: initalTickerDataState
}

const reducers: Reducer<KrakenBlotterState> = combineReducers<KrakenBlotterState>({
    tickerData: tickerReducer
});

const store = createStore(
    reducers,
    initialState
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);