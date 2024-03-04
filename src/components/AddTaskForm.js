import React from 'react'

function AddTaskForm({ handleSubmit, handleInputChange, newTask }) {
    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="newitem">Add to the todo list</label>
            <input id="newitem" type="text" value={newTask} onChange={handleInputChange}></input>
            <button className="btnSubmit" type="submit">Add Item</button>
        </form>
    )
}

export default AddTaskForm