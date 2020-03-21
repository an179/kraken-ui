import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore, Reducer } from 'redux';
import { singleDataUpdateReducer } from './redux/reducers/BlotterSingleDataReducer';
import { Provider } from 'react-redux';
import {KrakenBlotterRootState } from './redux/stateTypes/StateTypes'
import { TransformedTickerDetails } from './types/KrakenTickerTypes';
import { BlotterData } from './types/CommonTypes';
import { TransformedOhlcDetails } from './types/KrakenOhlcTypes';
import { TransformedTradeDetails } from './types/KrakenTradeTypes';
import { bulkDataUpdateReducer } from './redux/reducers/BlotterBulkDataReducer';
import { TransformedSpreadDetails } from './types/KrakenSpreadTypes';

const initalTickerDataState: BlotterData<TransformedTickerDetails> = []
const initialOhlcDataState: BlotterData<TransformedOhlcDetails> = []
const initialTradeDataState: BlotterData<TransformedTradeDetails> = []
const initialSpreadDataState: BlotterData<TransformedSpreadDetails> = []


const initialState: KrakenBlotterRootState = {
    tickerData: initalTickerDataState,
    ohlcData: initialOhlcDataState,
    tradeData: initialTradeDataState,
    spreadData: initialSpreadDataState
}

const reducers: Reducer<KrakenBlotterRootState> = combineReducers<KrakenBlotterRootState>({
    tickerData: singleDataUpdateReducer,
    ohlcData: singleDataUpdateReducer,
    tradeData: bulkDataUpdateReducer,
    spreadData: singleDataUpdateReducer
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