import styled from "styled-components"
import { useEffect, useState } from 'react';
import useLocalStorage from "./useLocalStorage";
import InputBox from './InputBox'

const TaskBox = styled.div`
width: 480px;
flex-direction: column;
background-color: rgba(0,0,0,0);
margin: 20px;
`

const TaskHeader = styled.header`
display : flex;
    align-items: center;
    justify-content : space-between;
width: 480px;
height: 40px;
background-color: rgba(0,0,0,0);
border-bottom: 1px solid rgba(0,0,0,0.2);
margin-bottom: 24px;
button{
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
}
`

const Task = styled.div`
justify-content : space-between;
width: 480px;
height: 50px;
background-color: #FFFFFF;
padding: 0 12px;
margin-bottom: 12px;
color: #5A5A55;
`
const CheckBtn = styled.button`
width: 24px;
height: 24px;
border-radius: 50%;
background-color: #dfdfdf;
`

const DeleteBtn = styled.button`
width: 24px;
height: 24px;
border: 1px solid #dfdfdf;
`


export default function Tab( { tab } ){
    const currTab = 
        tab === 'Daily life' ? 'daily' :
        tab === 'Study' ? 'study' : 
        tab === 'Work' ? 'work' : null
    const [local, setLocal] = useLocalStorage(currTab, [])
    // const [study, setStudy] = useLocalStorage('study', [])
    // const [work, setWork] = useLocalStorage('work', [])
    const [taskList, setTaskList] = useState([])

    useEffect(()=>{
        setTaskList(local)
    },[ tab ])

return(
    <TaskBox>
        <TaskHeader>
            Tasks
            <DeleteBtn />
        </TaskHeader>
        {taskList.map((task, index) => {
            return (
                <Task
                    key={`taskNo${index}`}
                >
                    <CheckBtn />
                    {task}                    
                    <DeleteBtn/>
                </Task>
            )
        })}
    <InputBox taskList={taskList} setTaskList={setTaskList}
    setLocal={setLocal}/>
    </TaskBox>
)
}