import TickerBlotter from './components/TickerBlotter';
import React from 'react';
import { KrakenBlotterState } from './redux/state/StateTypes'
import { TickerBlotterColDefs } from './TickerBlotterColDefs';
import { useSubscriptionToKrakenTicker } from './api/KrakenWebsocketApiConsumers';
import { TickerDetailsForAgGrid } from './redux/TickerTypes';

function App() {
    useSubscriptionToKrakenTicker();
    return(
        <TickerBlotter 
            select = {(state: KrakenBlotterState) => state.tickerData} 
            getRowNodeId={(data: TickerDetailsForAgGrid) => data.currencyPair}
            columnDefs = {TickerBlotterColDefs}
        />
    );
}

export default App
