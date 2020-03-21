import React from 'react';
import './styles/Blotter.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { GetRowNodeIdFunc, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { KrakenBlotterRootState } from '../../redux/stateTypes/StateTypes'
import {BlotterData} from '../../types/CommonTypes'

interface IBlotterProps<T> {
  getRowNodeId: GetRowNodeIdFunc
  columnDefs: ColDef[]
  select: (state: KrakenBlotterRootState) => BlotterData<T>,
}

const onGridReady = (event: GridReadyEvent) => {
  event.api.sizeColumnsToFit()
}

function Blotter<T>(props: IBlotterProps<T>) {

  const data: BlotterData<T> = useSelector<KrakenBlotterRootState, BlotterData<T>>(props.select);
  return (
    <div className="ag-theme-balham-dark blotter">
      <AgGridReact
        columnDefs={props.columnDefs}
        rowData = {data}
        defaultColDef={{filter: true}}
        deltaRowDataMode={true}
        getRowNodeId= { props.getRowNodeId }
        enableCellChangeFlash={true}
        showToolPanel={true}
        enableFilter={true}
        enableSorting={true}
        enableColResize={true}
        onGridReady={onGridReady}
      />
    </div>
  );
}

export default Blotter;
