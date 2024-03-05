import React, { useState, useEffect } from 'react'

function RepeatMessage(message) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message)
    }, 2000)
    return () => {
      clearInterval(id)
    }
  })
  return <div>Loggin to console</div>
}

function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('language') || "")
  const [count, setCount] = useState(() => Number(window.localStorage.getItem('count') || 0))

  useEffect(() => {
    document.title = "intro useEffect"
  }, [])

  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("count", count);

  }, [count])

  return (
    <>
      <div >
        <label htmlFor='language'>Favorite Language</label>
        <input id='language' name='language' value={language} onChange={(event) => setLanguage(event.target.value)} />
        {language ? (<div>your favorite language is {language}</div>) : (<div>please type your favorite language</div>)}
      </div>
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button >
      <RepeatMessage message={language} />
    </>
  );
}

export default App;
