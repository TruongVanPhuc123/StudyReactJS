import React from 'react'

function Favorite({ language, setLanguage }) {
    return (
        <div>
            <label htmlFor='language'>Favorite Language</label>
            <input type='text' value={language} onChange={(e) => setLanguage(e.target.value)} />
        </div>
    )
}

export default Favorite