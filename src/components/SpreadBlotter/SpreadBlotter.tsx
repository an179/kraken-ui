import Blotter from '../Blotter/Blotter';
import React from 'react';
import { TradeColDefs } from './SpreadColDefs';
import { useSubscriptionTo } from '../../api/KrakenWebsocketApiConsumers';
import { KrakenBlotterRootState } from '../../redux/stateTypes/StateTypes'
import { singleDataUpdate } from '../../redux/actions/ActionCreators';
import { TransformedSpreadDetails, transformSpreadDetails } from '../../types/KrakenSpreadTypes';

function SpreadBlotter() {
    useSubscriptionTo("spread", transformSpreadDetails, singleDataUpdate);

    return(
        <Blotter<TransformedSpreadDetails> 
            select = {(state: KrakenBlotterRootState) => state.spreadData} 
            getRowNodeId={(data: TransformedSpreadDetails) => data.currencyPair}
            columnDefs = {TradeColDefs}
        />
    );
}

export default SpreadBlotter