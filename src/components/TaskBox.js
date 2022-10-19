import styled from 'styled-components'
import { useState } from 'react'
import InputBox from './InputBox'

const TaskItem = styled.div`
  justify-content: space-between;
  width: 480px;
  height: 50px;
  background-color: #ffffff;
  padding: 0 12px;
  margin-bottom: 12px;
  p {
    color: ${(props) => (props.isChecked ? '#dfdfdf' : '#5A5A55')};
    text-decoration: ${(props) => (props.isChecked ? 'line-through' : null)};
  }
`

const CheckBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => (props.isChecked ? '#D95550' : '#dfdfdf')};
`

const EditBtn = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #dfdfdf;
  color: #dfdfdf;
  i {
    font-size: 14px;
  }
`

export default function TaskBox({
  task,
  idx,
  currTab,
  taskList,
  setTaskList,
  isChecked,
  setIsChecked,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleEditClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCheckClick = () => {
    let temp = [...isChecked]
    temp[idx] === null ? (temp[idx] = true) : (temp[idx] = !temp[idx])
    window.localStorage.setItem(`${currTab}Checked`, JSON.stringify(temp))
    setIsChecked(
      () => JSON.parse(window.localStorage.getItem(`${currTab}Checked`)) || []
    )
  }

  return (
    <>
      {isOpen ? (
        <InputBox
          currTab={currTab}
          setIsOpen={setIsOpen}
          mode="edit"
          idx={idx}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ) : (
        <TaskItem key={`taskNo${idx}`} isChecked={isChecked[idx]}>
          <CheckBtn isChecked={isChecked[idx]} onClick={handleCheckClick}>
            <i className="fa-solid fa-check"></i>
          </CheckBtn>
          <p>{task}</p>
          <EditBtn onClick={handleEditClick}>
            <i className="fa-solid fa-pencil"></i>
          </EditBtn>
        </TaskItem>
      )}
    </>
  )
}
