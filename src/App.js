import React, { useState } from 'react'

import './App.css';

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
      <h1 className="title">Todo List
        <span>Get one item done at a time.</span>
      </h1>
      <ul className="task-list">
        {tasks
          .filter((task) => (showImcomplete ? task.status !== 1 : true))
          .map((task) => (
            <li key={task.id} className={task.status === 1 ? "done" : ""}>
              <span className="label">{task.title}</span>
              <div className="actions">
                <input className="btn-action btn-action-done" type="checkbox"
                  checked={Boolean(task.status)}
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)} />
                <button onClick={(e) => remmoveTask(task.id)} className="btn-action btn-action-delete" >❌</button>
              </div>
            </li>
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">Show incomplete tasks only</label>
        <input id="filter" type="checkbox" checked={showImcomplete} onChange={handleChekedBox}></input>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="newitem">Add to the todo list</label>
        <input id="newitem" type="text" value={newTask} onChange={handleInputChange}></input>
        <button className="btnSubmit" type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
