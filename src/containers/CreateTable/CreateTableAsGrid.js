import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import "./CreateTable.css";
//import Draggable from "react-draggable";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
//import { HotTable } from '@handsontable/react';
//import Handsontable from 'handsontable';


const CreateTable = props => {

//const data = Handsontable.helper.createSpreadsheetData(6, 10);
const settings = {
    //data:data,
    colHeaders:true,
    rowHeaders:true,
    licenseKey:'non-commercial-and-evaluation',
    manualColumnResize: true,
    manualRowResize: true
}

const [columns, setColumns] = useState([{
    headerName: "Make", field: "make", sortable: true, filter: true, checkboxSelection: true,
    resizable: true
  }, {
    headerName: "Model", field: "model",
    resizable: true
  }, {
    headerName: "Price", field: "price",
    resizable: true
  }]);
 const rowData = [{
    make: "Toyota", model: "Celica", price: 35000,
    resizable: true
  }, {
    make: "Ford", model: "Mondeo", price: 32000
  }, {
    make: "Porsche", model: "Boxter", price: 72000
  }]

 

  const headerElement = document.getElementsByClassName("ag-header-row ag-header-row-column")[1]
  let headerWidth = "800px";
  const gridOptions ={
    rowSelection:"multiple",
    columnDefs:columns,
    rowData:rowData
  }
  useEffect(()=>{
    console.log(headerElement)
    if(headerElement){
        headerWidth = headerElement.style.width.toString();
        console.log(headerElement)

    }

  },[])
  const addColumnHandler = (event, headerName="Test", field="Test", resizable="true") => {
      event.preventDefault();
    const newColumn = {headerName, field,resizable}
    
    const newColumns = [...columns,newColumn]
    console.log(newColumns)
    setColumns(newColumns)
  }
  const removeColumnHandler = (event, headerName="Test") => {
    event.preventDefault();
  
  const newColumns = columns.filter(column => {
      return column.headerName!==headerName
  })
  console.log(newColumns)
  setColumns(newColumns)
}

    return(
    <div className="TableGridContainer">
       <div  className="ag-theme-alpine resizable">
        <AgGridReact
            rowSelection="multiple"
            columnDefs={columns}
            rowData={rowData}>
        </AgGridReact>
        </div>
        <div>
            <button type = "submit" onClick={(event, headerName, field, resizable) =>addColumnHandler(event, headerName, field, resizable) }>Add Column</button>
            <button type = "submit" onClick={(event, headerName) =>removeColumnHandler(event, headerName) }>Remove Column</button>
        </div>
      </div>
    )
}

/*<HotTable settings = {settings}
id="hot"
/>
ReactDOM.render(<CreateTable />, document.getElementById('hot-app'));
*/
export default CreateTable;