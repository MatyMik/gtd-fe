import React from "react";
import "./MyFrame.css";
import MyFrameList from "../../components/UI/MyFrameList/MyFrameList";
import TextField from "../../components/UI/TextField/TextField";

const MyFrame = props => {
    const starterList = [{
        title: "Törődés", 
        tasks: [{
            number:1,
            title:"react",
            done: false
        }, {
            title:"Angular", 
            done: false
        }]
    },{
        title: "Opcionális", 
        tasks: [{number:1,
            title:"Macska alom",
            done: false
        }, {number:2,
            title:"Robotporszívó", 
            done: false
        }]
    }]

    const textFields = [{title: "Hála", content: "Csenge"}, ]

    const lists = starterList.map((list, index)=><MyFrameList title ={list.title} tasks ={list.tasks} key = {index}/>)
    const textFieldList = textFields.map((textField, index) => {
        return <TextField textValue={textField.content} key = {index} title={textField.title}/>
    }) 
    return (
        <div className = "MyFrame">
            <div>
                Ez az iteráció (2020) 
                <p>június 22 - július 05</p>
            </div>
            <div>
                <div>Mik            Balázs</div>
                <div className="MyFrameListsContainer">
                    {lists}
                </div>
                {textFieldList}
                
            </div>
        </div>
    )
}

export default MyFrame; 