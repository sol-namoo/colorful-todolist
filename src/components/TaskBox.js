import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import styled from 'styled-components'
import InputBox from './InputBox'

const TaskItem = styled.div`
  justify-content: space-between;
  width: 480px;
  height: 50px;
  background-color: #ffffff;
  padding: 0 12px;
  margin-bottom: 12px;
  p {
    color: ${(props) => (props.checkList ? '#dfdfdf' : '#5A5A55')};
    text-decoration: ${(props) => (props.checkList ? 'line-through' : null)};
  }
`

const CheckBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => (props.checkList ? '#D95550' : '#dfdfdf')};
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

export default function TaskBox({ task, idx }) {
  const dispatch = useDispatch()
  const tab = useSelector((store) => store.tab)
  const checkList = useSelector((store) => store.checkList)
  const [isOpen, setIsOpen] = useState(false)

  const handleEditClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCheckClick = () => {
    let temp = [...checkList]
    temp[idx] === null ? (temp[idx] = true) : (temp[idx] = !temp[idx])
    window.localStorage.setItem(`${tab} Checked`, JSON.stringify(temp))
    dispatch({ type: 'GET_CHECKLIST' })
  }

  return (
    <>
      {isOpen ? (
        <InputBox setIsOpen={setIsOpen} mode="edit" task={task} idx={idx} />
      ) : (
        <TaskItem key={`taskNo${idx}`} checkList={checkList[idx]}>
          <CheckBtn checkList={checkList[idx]} onClick={handleCheckClick}>
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
