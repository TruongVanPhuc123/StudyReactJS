import React from 'react'

function Display({ name, language }) {
    return (
        <div>
            <p>Hey {name}, your favorite language is {language} !</p>
        </div>
    )
}

export default Display