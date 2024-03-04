import React, { useState } from 'react'

const allItems = [
  { id: 'breaming', value: '😁', isSmiley: true },
  { id: 'grinning', value: '😀', isSmiley: true },
  { id: 'squinting', value: '😆', isSmiley: true },
  { id: 'winking', value: '😉', isSmiley: true },
  { id: 'sad', value: '🥲', isSmiley: true }
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [items, setItems] = useState(allItems)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const removeItems = (itemsID) => {
    setItems(items.filter((items) => items.id !== itemsID))
  }

  return (
    <div>
      <h1>Smiley</h1>
      <div className="loginControl">
        {isLoggedIn ? (<button onClick={handleLogout}>Logout </button>) : (<button onClick={handleLogin}>Login</button>)}
      </div>
      <div>
        <h2>{isLoggedIn && (
          <ul style={{ listStyle: 'none' }}>
            {items.map(item => (
              <li key={item.id}>
                <button onClick={() => removeItems(item.id)}>remove</button>
                <label htmlFor={`${item.id}-input`}>
                  {item.value}{item.id}
                </label>
                <input id={`${item.id}-input`} type='text' defaultValue={item.id}></input>
              </li>
            ))}
          </ul>
        )}</h2>
      </div>
      {String(isLoggedIn)}
    </div>
  )
}

export default App