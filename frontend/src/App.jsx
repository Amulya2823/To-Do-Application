import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { CreateTodo } from './CreateTodo'
import { Todos } from './Todos'

function App() {
  const [todos, settodos] = useState([])

  useEffect( () => {
    fetchdata();
  },[])

  const fetchdata = async () => {
    const data = await fetch("http://localhost:3000/todos");
    const json = await data.json();
    settodos(json.todos)
  }

  return (
    <div>
      <CreateTodo/>
      <Todos todos = {todos}/>
    </div>
  )
}

export default App
