import React from 'react'

function Name({ name, setName }) {
    return (
        <div>
            <p>Name</p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Name