import React from 'react'
import Name from './components/Name';
import Favorite from './components/Favorite';
import Display from './components/Display';
import useLocalStorage from './/hook/UseLocalStorage'

function App() {
  const [name, setName] = useLocalStorage('name')
  const [language, setLanguage] = useLocalStorage('language')

  return (
    <div >
      <h1>Lifting state up</h1>
      <Name name={name} setName={setName} />
      <Favorite language={language} setLanguage={setLanguage} />
      <Display name={name} language={language} />
    </div>
  );
}

export default App;
