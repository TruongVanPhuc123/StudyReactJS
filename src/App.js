import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import TaksList from './components/TaksList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTask] = useState([
    { id: "task_1", title: "Learn LS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 0 },
  ])

  const [showImcomplete, setShowImcomplete] = useState(true)
  const [newTask, setNewTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      }
      setTask([...tasks, task])
      setNewTask("")
    }
  }

  const handleChekedBox = (e) => {
    setShowImcomplete(e.target.checked)
  }

  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  const setTaskStatus = (taskID, status) => {
    setTask(tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, status: status ? 1 : 0 };
      }
      return task;
    }))
  };

  const remmoveTask = (taskID) => {
    setTask(tasks.filter((task) => task.id !== taskID))
  }

  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get one item done at a time." />
      <TaksList tasks={tasks} showImcomplete={showImcomplete} setTaskStatus={setTaskStatus} remmoveTask={remmoveTask} handleChekedBox={handleChekedBox} />
      <AddTaskForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} newTask={newTask} />
    </div>
  );
}

export default App;
