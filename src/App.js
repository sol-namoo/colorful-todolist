import React, { useState } from 'react';
import Header from './components/Header'
import Tab from './components/Tab'
import Taskbox from './components/TaskBox'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  margin:0;padding:0;border:0;
  body{
    width: 100vw;
    height: 100vh;
    background-color: ${
      props => (
        props.tab === 'Daily life' ? '#5D9CA0' :
        props.tab === 'Study' ? '#D95550' :
        props.tab === 'Work' ? '#588AAC' : '#5D9CA0' 
      )};
    transition: background-color 0.8s;
    font-family: 'Jua', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
  }
  button{
    display : flex;
    align-items: center;
    justify-content : center;
    border: none;
    border-radius : 6px;
    background-color: rgba(255, 255, 255, 0.1);
    font-family: 'Jua', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    cursor : pointer;
  }
  div{
    box-sizing: border-box;
    display : flex;
    align-items: center;
    justify-content : center;
    border-radius : 6px;
    .container{
      flex-direction: column;
    }
  }
  input{
    font-family: 'Jua', sans-serif;
  }
`

function App() {
    const [tab, setTab] = useState('Daily life')

  return (
    <>
      <GlobalStyle tab={tab}/>
      <div className='container'>
        <Header />
        <Tab tab={tab} setTab={setTab} />
        <Taskbox tab={tab} />
      </div>
    </>
  );
}

export default App;
