import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <h1>React Router Dom Intro</h1>
      <Link to="/invitations">invitations</Link>
      <Link to="/invoices">invoices</Link>

      <Outlet />
    </div>
  );
}

export default App;
