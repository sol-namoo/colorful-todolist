import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskBox from './TaskBox'
import TaskInputBox from './TaskInputBox'

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
  const dispatch = useDispatch()
  const tab = useSelector((store) => store.tab)
  const taskList = useSelector((store) => store.taskList)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch({ type: 'GET_TASKLIST' })
    dispatch({ type: 'GET_CHECKLIST' })
  }, [tab])

  const handleAddClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <TaskContainerStyle>
      <TaskHeader>Tasks</TaskHeader>
      {taskList.map((task, idx) => {
        return <TaskBox key={`task${idx}`} task={task} idx={idx} mode="edit" />
      })}
      {isOpen ? (
        <TaskInputBox setIsOpen={setIsOpen} />
      ) : (
        <AddTaskBtn onClick={handleAddClick}>+ Add Task</AddTaskBtn>
      )}
    </TaskContainerStyle>
  )
}
