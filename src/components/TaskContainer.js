import styled from 'styled-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskBox from './TaskBox'
import InputBox from './InputBox'

const TaskContainerStyle = styled.div`
  width: 480px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0);
  margin: 20px;
`

const TaskHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 24px;
  button {
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const AddTaskBtn = styled.button`
  width: 480px;
  height: 60px;
  border: 1px dashed #ffffff;
`

export default function TaskContainer() {
  // const dispatch = useDispatch()
  const taskList = useSelector((store) => store.taskList)
  const [isOpen, setIsOpen] = useState(false)

  const handleAddClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <TaskContainerStyle>
      <TaskHeader>Tasks</TaskHeader>
      {taskList.map((task, idx) => {
        return <TaskBox key={`task${idx}`} task={task} idx={idx} />
      })}
      {isOpen ? (
        <InputBox setIsOpen={setIsOpen} mode="create" />
      ) : (
        <AddTaskBtn onClick={handleAddClick}>+ Add Task</AddTaskBtn>
      )}
    </TaskContainerStyle>
  )
}
