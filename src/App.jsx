import { useState } from 'react'
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
