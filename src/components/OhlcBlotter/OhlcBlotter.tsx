import Blotter from '../Blotter/Blotter';
import React from 'react';
import { OhlcColDefs } from './OhlcColDefs';
import { useSubscriptionTo } from '../../api/KrakenWebsocketApiConsumers';
import { TransformedOhlcDetails, transformOhlcData } from '../../types/KrakenOhlcTypes';
import { KrakenBlotterRootState } from '../../redux/stateTypes/StateTypes'
import { singleDataUpdate } from '../../redux/actions/ActionCreators';

function OhlcBlotter() {
    useSubscriptionTo("ohlc", transformOhlcData, singleDataUpdate);
    return(
        <Blotter<TransformedOhlcDetails> 
            select = {(state: KrakenBlotterRootState) => state.ohlcData} 
            getRowNodeId={(data: TransformedOhlcDetails) => data.currencyPair}
            columnDefs = {OhlcColDefs}
        />
    );
}

export default OhlcBlotter
