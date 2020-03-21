import Blotter from '../Blotter/Blotter';
import React from 'react';
import { TradeColDefs } from './TradeColDefs';
import { useSubscriptionTo } from '../../api/KrakenWebsocketApiConsumers';
import { TransformedTradeDetails, transformTradeData } from '../../types/KrakenTradeTypes';
import { KrakenBlotterRootState } from '../../redux/stateTypes/StateTypes'
import { bulkDataUpdate } from '../../redux/actions/ActionCreators';

function TradeBlotter() {
    useSubscriptionTo("trade", transformTradeData, bulkDataUpdate);

    return(
        <Blotter<TransformedTradeDetails> 
            select = {(state: KrakenBlotterRootState) => state.tradeData} 
            getRowNodeId={(data: TransformedTradeDetails) => data.time.toString()}
            columnDefs = {TradeColDefs}
        />
    );
}

export default TradeBlotter