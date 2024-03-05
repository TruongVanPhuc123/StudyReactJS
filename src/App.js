import React, { useState, useEffect } from 'react'

const api = {
  key: 'a728e6f9c3f6b1911f1358aa89ac447e',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [weatherInfo, setWeatherInfo] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!searchCity) return;
      setLoading(true);
      // Process weather data
      try {
        const url = `${api.base}weather?q=${searchCity}&units=metric&APPID=${api.key}`;
        const response = await fetchWeatherData(url);
        const data = await response.json();
        console.log(response, data)
        setWeatherInfo(JSON.stringify(data));
      } catch (error) {
        setErrorMessage(error.message)
      }
      setLoading(false);
    }
    fetchWeatherData();
  }, [searchCity])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCity(searchInput)
  }
  return (
    <>
      <h1>Fetch Data With useEffect</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='City' value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }}></input>
        <button>Search</button>
      </form>
      <div>{weatherInfo}</div>
    </>
  );
}

export default App;
