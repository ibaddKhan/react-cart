import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routers from './config/router-config/routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routers/>
    </>
  )
}

export default App
