import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Table from './components/Table'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    <Form/>
    <Table/>
    </div>
    
    </>
  )
}

export default App
