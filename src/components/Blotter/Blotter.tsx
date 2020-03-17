import React from 'react';
import './styles/Blotter.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { GetRowNodeIdFunc, ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { KrakenBlotterRootState } from '../../redux/stateTypes/StateTypes'
import {BlotterData, TreeStructuredData} from '../../types/CommonTypes'

interface IBlotterProps<T extends TreeStructuredData> {
  getRowNodeId: GetRowNodeIdFunc
  columnDefs: ColDef[]
  select: (state: KrakenBlotterRootState) => BlotterData<T>,
}

function Blotter<T extends TreeStructuredData>(props: IBlotterProps<T>) {

  const data: BlotterData<T> = useSelector<KrakenBlotterRootState, BlotterData<T>>(props.select);
  console.log(data)
  return (
    <div className="ag-theme-balham blotter">
      <AgGridReact
        columnDefs={props.columnDefs}
        rowData = {data}
        defaultColDef={{filter: true}}
        deltaRowDataMode={true}
        getRowNodeId= { props.getRowNodeId }
        enableCellChangeFlash={true}
      />
    </div>
  );
}

export default Blotter;
