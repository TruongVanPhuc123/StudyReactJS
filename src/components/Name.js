import React from 'react'

function Name({ name, setName }) {
    return (
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Name