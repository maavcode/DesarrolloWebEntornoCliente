import { useState } from 'react'


import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  
  const [tasks, setTasks] =  useState([]); // Lista Mutable

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    }

    setTasks((prevTasks) => [...prevTasks, newTask]) // Crea un nuevo array con todo lo anterior mas la nueva, para que react sepa que es un estado

  }

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <h1>Mi Lista de Tareas Realista</h1>
      <TaskForm onAddTask = {addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
    </>
  )
}

export default App
