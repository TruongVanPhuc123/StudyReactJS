import React, { useState } from 'react'


function App() {
  const [formData, setFormData] = useState({
    username: 'tvphuc',
    email: 'tvphuc@gmail.com',
    language: 'VN'
  })

  const [error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    const isUsernameValid = formData.username === formData.username.toLowerCase();
    // isUsernameValid === true ? setError('') : setError('Please enter a username not UpperCase !');
    setError(!isUsernameValid ? 'Please enter a username not UpperCase !' : '')
    console.log(isUsernameValid)
  }

  const handleInnputChange = (e) => {
    const field = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [field]: value });
  }

  return (
    <div >
      <p style={{ color: 'red' }}>{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>UserName</label>
          <input value={formData.username} onChange={handleInnputChange} type="text" id="username" name='username' autoComplete='off'></input>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input value={formData.email} onChange={handleInnputChange} type="text" id="email" name='email' autoComplete='off'></input>
        </div>
        <div>
          <label>Language
            <select name='language' value={formData.language} onChange={handleInnputChange}>
              <option value='VN'>VN</option>
              <option value='EN'>EN</option>
              <option value='DE'>DE</option>
            </select>
          </label>
        </div>
        <div>
          <label>Is going ?</label>
          <input type="checkbox" id="isGoing" name='isGoing' checked={formData.isGoing} onChange={handleInnputChange} ></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
