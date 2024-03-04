import React from 'react'

function TaskItem({ task, setTaskStatus, remmoveTask }) {
    return (
        <li key={task.id} className={task.status === 1 ? "done" : ""}>
            <span className="label">{task.title}</span>
            <div className="actions">
                <input className="btn-action btn-action-done" type="checkbox"
                    checked={Boolean(task.status)}
                    onChange={(e) => setTaskStatus(task.id, e.target.checked)} />
                <button onClick={(e) => remmoveTask(task.id)} className="btn-action btn-action-delete" >❌</button>
            </div>
        </li>
    )
}

export default TaskItem