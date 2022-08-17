import { useEffect, useState } from 'react';
import styled from "styled-components"

const TaskInputBoxStyle = styled.div`
width: 480px;
height: 100px;
background-color: #FFFFFF;
padding: 4 12px;
margin-bottom: 12px;
color: #5A5A55;
input{
    margin: 0 8px;
}
`

const ColoredBtn = styled.button`
width: 56px;
height: 30px;
font-size: 14px;
margin-left: ${props => (props.color === 'gray' ? '8px' : '0' )};
color: ${props => (props.color !== 'gray' ? 'rgb(136, 136, 136)' : 'rgb(239, 239, 239)')};
background-color: ${props => (props.color === 'gray' ? 'rgb(136, 136, 136)' : 'rgb(239, 239, 239)')};
`

export default function TaskInputBox({taskList, setTaskList, currTab, setIsOpen, task}){
    const [input, setInput] = useState(task)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSaveClick = (e) => {
        setIsOpen(false)
        window.localStorage.setItem(currTab, JSON.stringify([...taskList, input]));
        setTaskList(() => JSON.parse(window.localStorage.getItem(currTab)) || [])
    }
    
    const handleDeleteClick = (task) => {
        setIsOpen(false)
        window.localStorage.setItem(currTab, JSON.stringify(taskList.filter((el)=> el !== task)));
        setTaskList(() => JSON.parse(window.localStorage.getItem(currTab)) || [])
    }

    const handleCancleClick = (e) => {
        setIsOpen(false)
    }

    return (
        <TaskInputBoxStyle>
        {task !== null ?
            <ColoredBtn color='light' onClick={()=>handleDeleteClick(task)}>Delete</ColoredBtn>
            :null}
        <input
            input={input}
            onChange={handleInputChange}
            placeholder='What are you working on?'
        ></input>
        <ColoredBtn color='light' onClick={handleCancleClick}>Cancle</ColoredBtn>
        <ColoredBtn color='gray' onClick={handleSaveClick}>Save</ColoredBtn>
        </TaskInputBoxStyle>
    )
} 