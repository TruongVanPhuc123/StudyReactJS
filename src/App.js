import React, { useState } from 'react'

function App() {
    const [like, setLike] = useState(0);
    const [blog, setblog] = useState({
        content: "React is awesome",
        count: 0
    })

    const handleCLick = () => {
        setLike(1 - like);
        setblog({ ...blog, count: blog.count + 1 })
    }

    return (
        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
            <h1>{blog.content}</h1>
            <h1 style={{ cursor: "pointer" }} onClick={handleCLick}>{like === 1 ? 'like ' : 'unlike '}{blog.count}</h1>
            <h1 style={{ color: like === 1 ? "red" : "black" }}>&#9829;</h1>
        </div>
    )

}

export default App
