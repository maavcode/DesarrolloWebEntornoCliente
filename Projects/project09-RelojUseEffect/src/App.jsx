import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusTimer from './App_alus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FocusTimer />
    </>
  )
}

export default App
