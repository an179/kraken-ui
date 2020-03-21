import Blotter from '../Blotter/Blotter';
import React from 'react';
import { KrakenBlotterRootState } from '../../redux/stateTypes/StateTypes'
import { TickerBlotterColDefs } from './TickerBlotterColDefs';
import { useSubscriptionTo } from '../../api/KrakenWebsocketApiConsumers';
import { TransformedTickerDetails, transformTickerData } from '../../types/KrakenTickerTypes';
import { singleDataUpdate } from '../../redux/actions/ActionCreators';

function TickerBlotter() {
    useSubscriptionTo("ticker", transformTickerData, singleDataUpdate);
    return(
        <Blotter<TransformedTickerDetails> 
            select = {(state: KrakenBlotterRootState) => state.tickerData} 
            getRowNodeId={(data: TransformedTickerDetails) => data.currencyPair}
            columnDefs = {TickerBlotterColDefs}
        />
    );
}

export default TickerBlotter
