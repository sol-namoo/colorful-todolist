import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const TaskInputBoxStyle = styled.div`
  width: 480px;
  height: 100px;
  background-color: #ffffff;
  padding: 4 12px;
  margin-bottom: 12px;
  color: #5a5a55;
  input {
    margin: 0 8px;
  }
`

const ColoredBtn = styled.button`
  width: 56px;
  height: 30px;
  font-size: 14px;
  margin-left: ${(props) => (props.color === 'gray' ? '8px' : '0')};
  color: ${(props) =>
    props.color !== 'gray' ? 'rgb(136, 136, 136)' : 'rgb(239, 239, 239)'};
  background-color: ${(props) =>
    props.color === 'gray' ? 'rgb(136, 136, 136)' : 'rgb(239, 239, 239)'};
`

export default function InputBox({ setIsOpen, mode, task, idx }) {
  const dispatch = useDispatch()
  const tab = useSelector((store) => store.tab)
  const taskList = useSelector((store) => store.taskList)
  const checkList = useSelector((store) => store.checkList)
  const [input, setInput] = useState(task)
  console.log(input)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSaveClick = () => {
    if (mode === 'create')
      window.localStorage.setItem(tab, JSON.stringify([...taskList, input]))
    else if (mode === 'edit') {
      taskList[idx] = input
      window.localStorage.setItem(tab, JSON.stringify(taskList))
    }
    dispatch({ type: 'GET_TASKLIST' })
    setIsOpen(false)
  }

  const handleDeleteClick = (task) => {
    setIsOpen(false)
    window.localStorage.setItem(
      tab,
      JSON.stringify(taskList.filter((el) => el !== task))
    )
    checkList.splice(idx, 1)
    window.localStorage.setItem(`${tab} Checked`, JSON.stringify(checkList))
    dispatch({ type: 'GET_TASKLIST' })
  }

  const handleCancleClick = () => {
    setIsOpen(false)
  }

  return (
    <TaskInputBoxStyle>
      {task !== undefined ? (
        <ColoredBtn color="light" onClick={() => handleDeleteClick(task)}>
          Delete
        </ColoredBtn>
      ) : null}
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="What are you working on?"
      ></input>
      <ColoredBtn color="light" onClick={handleCancleClick}>
        Cancle
      </ColoredBtn>
      <ColoredBtn color="gray" onClick={handleSaveClick}>
        Save
      </ColoredBtn>
    </TaskInputBoxStyle>
  )
}
