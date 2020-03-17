import React from 'react';
import './componentStyles/Blotter.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { GetRowNodeIdFunc, ColDef, GridReadyEvent, GridApi } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { KrakenBlotterState, TickerDataState } from '../redux/state/StateTypes'
import { Ticker, TickerDetailsForAgGrid } from '../redux/TickerTypes';

interface IBlotterProps<Ticker, TickerDetailsForAgGrid> {
  getRowNodeId: GetRowNodeIdFunc
  columnDefs: ColDef[]
  select: (state: KrakenBlotterState) => TickerDataState,
}

let api: GridApi | undefined;

const onGridReady = (event: GridReadyEvent) => {
  api = event.api;
}
function TickerBlotter(props: IBlotterProps<Ticker, TickerDetailsForAgGrid>) {

  const data: TickerDataState = useSelector<KrakenBlotterState, TickerDataState>(props.select);

  return (
    <div className="ag-theme-balham blotter">
      <AgGridReact
        columnDefs={props.columnDefs}
        rowData = {data}
        defaultColDef={{filter: true}}
        deltaRowDataMode={true}
        getRowNodeId= { props.getRowNodeId }
        enableCellChangeFlash={true}
        onGridReady={onGridReady}
      />
    </div>
  );
}

export default TickerBlotter;
