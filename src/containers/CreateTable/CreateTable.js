import React, { useState, useRef, useEffect } from "react";
import "./CreateTable.css";
import "handsontable/dist/handsontable.full.min.css"
//import Draggable from "react-draggable";
import {updateSettingItems} from "./CreateTableHelper";

import {HuePicker} from "react-color"

import { HotTable } from '@handsontable/react';
//import Handsontable from 'handsontable';

const CreateTable = props => {

    const hotTableRef = useRef(null);
    const hotTableInstance = hotTableRef.current;
    const [backgroundColor, setBackgroundColor] = useState('rgba(255,100,0,0.2)')
    const [data, setData] = useState([{taskName:"React", startDate: "asdfa"},
    {taskName:"Angular", startDate: "asdfasdfsf"}
  ]);
    useEffect(()=>{
        console.log(hotTableInstance)
    },[hotTableRef])
    
    const afterChangeHandler = function(change, source) {
        console.log(change,source)
    }
    const colorRed = (event) =>{
        event.preventDefault();
        console.log(hotTableRef.current.hotInstance.getSelectedRange());
        //const cell = hotTableRef.current.hotInstance.getCell(rowIndex, colIndex)
    }

  const settings = {
    afterCreateRow: (index,change, source) => afterChangeHandler(index, change, source),
    manualColumnResize: true,
    manualRowResize: true,
    dataSchema:{taskName: null, startDate:null, responsible:null},
    columns:[{data: "taskName"},{data: "startDate"},{}],
    data: data,
    width:"100%",
    height:"300",
    licenseKey:'non-commercial-and-evaluation',
    rowHeaders: true,
    colHeaders: ["Task Name", "Start Date", "Responsible"],
    cells: (row,col,props) =>{
        console.log(props)
        return {readOnly:true}
    },
    contextMenu: {
      items:[
        'row_above',
        'row_below',
        'col_left',
        'col_right',
        'remove_row',
        'remove_col',
        'undo',
        'redo',
        'make_read_only',
        'alignment',
        '---------',
        'borders',
        'commentsAddEdit',
        'commentsRemove',
        {
            key:'addcolumn',
            name: 'Add Column Right',
            callback: (item1, [{end,start}]) =>{ 
                const currentSchema = hotTableRef.current.hotInstance.getSettings().dataSchema
                const indexToInsertTo = end.col+1;
                const colHeaders = hotTableRef.current.hotInstance.getColHeader()
                const columns = hotTableRef.current.hotInstance.getSettings().columns;
                const title = prompt("Header of the new column:");
                const [updatedSchema, updatedColHeader, updatedColumns] = updateSettingItems(indexToInsertTo, title, currentSchema, colHeaders, columns)
                console.log(updatedSchema, updatedColHeader, updatedColumns)
                setTimeout(()=>{ hotTableRef.current.hotInstance.updateSettings({
                    dataSchema: updatedSchema,
                    colHeaders:updatedColHeader, 
                    columns:updatedColumns
                })
            },200)
            setTimeout(()=>{ console.log(hotTableRef.current.hotInstance.getSettings().data)
        },200)
            }
        },
        {
            key: 'color',
            name: 'Color',
          submenu: {
            items: [{
              key: 'color:red',
              name: 'Red',
              callback: ()=>{console.log("Here")}
            }, {
              key: 'color:blue',
              name: 'Blue',
              callback:  (menuItem,  [{start, end}] ) => { 
                  //console.log(hotTableRef.current.hotInstance)
                const cell = hotTableRef.current.hotInstance.getCell(start.row, start.col) 
                cell.className= "OrangeBackground"
                
                }
            }]
          }
        }
      ]
    },
    comments: true
    }

    const handleColorChange = (color) =>{
        const {r,g,b,a} = color.rgb
        const newBackgroundColor = `rgba(${r},${g},${b},${a})`
        setBackgroundColor(newBackgroundColor)
    }

    return(
    <div className="TableGridContainer">
       <div id="hot-container" className="hot-app">
           <HuePicker  className ="ColorPicker"
           color = {backgroundColor}
        onChange={handleColorChange}
           />
            <HotTable settings ={settings} ref={hotTableRef}/>
            <button type = 'submit' onClick = {event => colorRed(event)}>Color Red</button>
        </div>
    </div>
    )
}



export default CreateTable;