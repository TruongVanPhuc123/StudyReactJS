import React, { useState } from 'react'
import './App.css'

function App() {
    const [Count, setCount] = useState(0)
    let color = Count < 0 ? 'red' : Count > 0 ? 'green' : 'black';

    const increase = () => setCount(Count + 1)
    const uncrease = () => setCount(Count - 1)
    const reset = () => setCount(0)
    return (
        <div class="container">
            <h1 class="head">Counter</h1>
            <div style={{ color }} id="number" class="numberUpDown">{Count}</div>
            <div class="btnGroup">
                <button onClick={uncrease} class="btn btnDescrease">Decrease</button>
                <button onClick={reset} class="btn btnReset">Reset</button>
                <button onClick={increase} class="btn btnIncrease">Increase</button>
            </div>
        </div>
    )
}

export default App