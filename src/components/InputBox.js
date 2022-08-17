import { useState } from 'react';
import styled from "styled-components"

const AddTaskBtn = styled.button`
width: 480px;
height: 60px;
border: 1px dashed #FFFFFF;
`

const AddTaskInput = styled.div`
width: 480px;
height: 100px;
background-color: #FFFFFF;
padding: 4 12px;
margin-bottom: 12px;
color: #5A5A55;
`

const InputBtn = styled.button`
width: 56px;
height: 30px;
font-size: 14px;
margin-left: 4px;
color: ${props => (props.color !== 'gray' ? 'rgb(136, 136, 136)' : 'rgb(239, 239, 239)')};
background-color: ${props => (props.color === 'gray' ? 'rgb(136, 136, 136)' : 'rgb(239, 239, 239)')};
`

export default function InputBox({taskList, setTaskList, setLocal}){
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')

    const handleAddBtnClick = (e) => {
        setIsOpen(!isOpen)
    }
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    const handleSaveBtnClick = (e) => {
        setTaskList([...taskList, input])
    }

    return (
        <>
        {isOpen ? 
        <AddTaskInput>
            <input
                input={input}
                onChange={handleInputChange}
                placeholder='What are you working on?'
            ></input>
            <InputBtn color='light' onClick={handleAddBtnClick}>Cancle</InputBtn>
            <InputBtn color='gray' onClick={handleSaveBtnClick}>Save</InputBtn>
        </AddTaskInput> 
        : <AddTaskBtn onClick={handleAddBtnClick} >+ Add Task</AddTaskBtn>}
        </>
    )
} 