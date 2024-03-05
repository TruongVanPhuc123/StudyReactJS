import React from 'react'

function Favorite({ language, setLanguage }) {
    return (
        <div>
            <p>Favorite Language</p>
            <input type='text' value={language} onChange={(e) => setLanguage(e.target.value)} />
        </div>
    )
}

export default Favorite