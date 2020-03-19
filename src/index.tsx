import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore, Reducer } from 'redux';
import { krakenBlotterReducer } from './redux/reducers/BlotterDataUpdateReducer';
import { Provider } from 'react-redux';
import {KrakenBlotterRootState } from './redux/stateTypes/StateTypes'
import { TransformedTickerDetails } from './types/KrakenTickerTypes';
import { BlotterData } from './types/CommonTypes';
import { TransformedOhlcDetails } from './types/KrakenOhlcTypes';

const initalTickerDataState: BlotterData<TransformedTickerDetails> = []
const initialOhlcDataState: BlotterData<TransformedOhlcDetails> = []

const initialState: KrakenBlotterRootState = {
    tickerData: initalTickerDataState,
    ohlcData: initialOhlcDataState
}

const reducers: Reducer<KrakenBlotterRootState> = combineReducers<KrakenBlotterRootState>({
    tickerData: krakenBlotterReducer,
    ohlcData: krakenBlotterReducer
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