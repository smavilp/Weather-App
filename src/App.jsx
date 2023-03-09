import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import Loader from './components/Loader'
import Card from './components/Card'

function App() {

  const [weatherData, setWeatherData] = useState({})
  const [tempUnit, setTempUnit] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCoordinates()
    stayLoading ()
  }, [])
  
  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(position => getApi(position))
  }

  const getApi = (position) => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1cca7024d5326e6bbb4d399fc9de7608`)
    .then((resp) => {
      setWeatherData(resp.data)})
    .catch((error) => console.error(error))
  }

  const stayLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3500)
  }

  const getApiByCity = (city) =>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1cca7024d5326e6bbb4d399fc9de7608`)
    .then((resp) => {
      setWeatherData(resp.data)})
    .catch((error) => console.error(error))
  }

  const changeTheme = () => {
    const App = document.getElementById("App")
    const themeBtn = document.getElementById("theme-btn")
    if(document.body.classList.contains("dark")){
      document.body.classList.remove("dark")
      App.classList.remove("dark")
      themeBtn.classList.remove("dark")
    }else{
      document.body.classList.add("dark")
      App.classList.add("dark")
      themeBtn.classList.add("dark")
    }
  }

  return (
    <div className="App"  id='App'>
      {isLoading && <Loader />}
      <header className='header'>
        <h1 className='header-h1'>Weather app</h1>
        <button className='header-btn' onClick={changeTheme}>
          <div className='header-div ' id='theme-btn'></div>
        </button>
        <form className='header-form' onSubmit={e =>{
          e.preventDefault()
          getApiByCity(e.target.search.value)
        }}>
          <i class='bx bx-search header-i'></i>
          <input className='header-input' type="text" name='search' placeholder='Search city' />
        </form>
      </header>
      <main className='main'>
        <Card 
          data = {weatherData}
          unit = {tempUnit}
        />
        <button className='main-btn' onClick={() => setTempUnit(!tempUnit)} >Change to F°/C°</button>
      </main>
    </div>
  )
}

export default App
