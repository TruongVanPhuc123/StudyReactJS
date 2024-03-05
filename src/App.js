import { useState, useEffect } from 'react'
import Name from './components/Name';
import Favorite from './components/Favorite';
import Display from './components/Display';
import useLocalStorage from './hook/UseLocalStorage.js'
import useCounter from './hook/useCounter.js';

function App() {
  const [name, setName] = useLocalStorage('name')
  const [language, setLanguage] = useLocalStorage('language')
  const [uncrement, increment, count] = useCounter('count', 0)


  return (
    <div >
      <Name name={name} setName={setName} />
      <Favorite language={language} setLanguage={setLanguage} />
      <Display name={name} language={language} />
      <button onClick={uncrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+ </button>
    </div>
  );
}

export default App;
