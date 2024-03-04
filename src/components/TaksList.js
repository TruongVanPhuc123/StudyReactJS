import React from 'react'
import TaskItem from './TaskItem'

function TaksList({ tasks, showImcomplete, setTaskStatus, remmoveTask, handleChekedBox }) {
    return (
        <>
            <ul className="task-list">
                {tasks
                    .filter((task) => (showImcomplete ? task.status !== 1 : true))
                    .map((task) => (
                        <TaskItem key={task.id} task={task} setTaskStatus={setTaskStatus} remmoveTask={remmoveTask} />
                    ))}
            </ul>
            <div className="filter-wrapper">
                <label htmlFor="filter" className="filter-label">Show incomplete tasks only</label>
                <input id="filter" type="checkbox" checked={showImcomplete} onChange={handleChekedBox}></input>
            </div>
        </>
    )
}

export default TaksList