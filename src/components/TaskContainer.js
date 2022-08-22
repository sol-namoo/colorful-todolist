import styled from "styled-components"
import { useEffect, useState } from 'react';
import TaskBox from "./TaskBox";
import TaskInputBox from "./TaskInputBox";

const TaskContainerStyle = styled.div`
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

// const DeleteAllBtn = styled.button`
// width: 24px;
// height: 24px;
// border: 1px solid #dfdfdf;
// color: #dfdfdf;
// i{
//     font-size: 14px;
// }
// `

const AddTaskBtn = styled.button`
width: 480px;
height: 60px;
border: 1px dashed #FFFFFF;
`

export default function TaskContainer ( { currTab } ){
    const [taskList, setTaskList] = useState(
        () => JSON.parse(window.localStorage.getItem(currTab)) || []);
    const [isChecked, setIsChecked] = useState(
        () => JSON.parse(window.localStorage.getItem(`${currTab}Checked`)) || [])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTaskList(() => JSON.parse(window.localStorage.getItem(currTab)) || [])
        setIsChecked(() => JSON.parse(window.localStorage.getItem(`${currTab}Checked`)) || [])
    }, [currTab]);

    const handleAddClick = (e) => {
        setIsOpen(!isOpen)
    }

return(
    <TaskContainerStyle>
        <TaskHeader>
            Tasks
        </TaskHeader>
        {taskList.map((task, idx) => {
            return <TaskBox
                task={task} idx={idx}
                currTab={currTab} mode='edit'
                taskList={taskList} setTaskList={setTaskList}
                isChecked={isChecked} setIsChecked={setIsChecked}/>
        })}
    {isOpen ?
    <TaskInputBox 
    currTab={currTab} setIsOpen={setIsOpen}
    taskList={taskList} setTaskList={setTaskList}
    />
    : <AddTaskBtn onClick={handleAddClick} >+ Add Task</AddTaskBtn>
    }
    </TaskContainerStyle>
)
}