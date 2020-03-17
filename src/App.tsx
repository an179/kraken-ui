import TickerBlotter from './components/TickerBlotter';
import React from 'react';
import { KrakenBlotterState } from './redux/state/StateTypes';
import { transformTickerData } from './redux/TickerTypes'
import { TickerBlotterColDefs } from './TickerBlotterColDefs';

import { TickerDetailsForAgGrid } from './redux/TickerTypes';



function App() {
    return(
        <TickerBlotter 
            select = {(state: KrakenBlotterState) => state.tickerData} 
            getRowNodeId={(data: TickerDetailsForAgGrid) => data.currencyPair}
            transform = {transformTickerData}
            columnDefs = {TickerBlotterColDefs}
        />
    );
}

export default App
