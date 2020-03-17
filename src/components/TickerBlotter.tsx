import React from 'react';
import './componentStyles/Blotter.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { GetRowNodeIdFunc, ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { KrakenBlotterState, TickerDataState } from '../redux/state/StateTypes'
import { Ticker, TickerDetailsForAgGrid } from '../redux/TickerTypes';

interface IBlotterProps<Ticker, TickerDetailsForAgGrid> {
  getRowNodeId: GetRowNodeIdFunc
  columnDefs: ColDef[]
  select: (state: KrakenBlotterState) => Ticker[],
  transform: (data: Ticker) => TickerDetailsForAgGrid
}

function TickerBlotter(props: IBlotterProps<Ticker, TickerDetailsForAgGrid>) {

  const rawBlotterData: TickerDataState = useSelector<KrakenBlotterState, TickerDataState>(props.select);
  console.log(rawBlotterData);
  const transformedBlotterData: TickerDetailsForAgGrid[] = rawBlotterData.map(props.transform)
  console.log(transformedBlotterData);

  return (
    <div className="blotter">
      <AgGridReact
        columnDefs={props.columnDefs}
        rowData = {transformedBlotterData}
        defaultColDef={{filter: true}}
        deltaRowDataMode={true}
        getRowNodeId= { props.getRowNodeId }
        enableCellChangeFlash={true}
      />
    </div>
  );
}

export default TickerBlotter;
