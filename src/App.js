import { useState } from 'react'
import Header from './components/Header'
import Tab from './components/Tab'
import TaskContainer from './components/TaskContainer'
import { GlobalStyle } from './GlobalStyle'

function App() {
  const [tab, setTab] = useState('Daily life')
  const currTab =
    tab === 'Daily life'
      ? 'daily'
      : tab === 'Study'
      ? 'study'
      : tab === 'Work'
      ? 'work'
      : null

  return (
    <>
      <GlobalStyle tab={tab} />
      <div className="container">
        <Header />
        <Tab tab={tab} setTab={setTab} />
        <TaskContainer currTab={currTab} />
      </div>
    </>
  )
}

export default App
