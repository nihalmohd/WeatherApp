import React, { useState } from 'react'
import "./WeatherApp.css"
import {BiSearch} from "react-icons/bi"
import {BsFillCloudSunFill} from "react-icons/bs"
import {WiHumidity} from "react-icons/wi"
import {FiWind} from "react-icons/fi"
import {WeatherData} from "../../interface/weatherdata"

const WeatherApp = () => {
  let [weatherdata,setWeatherdata] = useState<WeatherData>()
  let [searchvalue,setSearchvalue] = useState<String>("")
  let APIKEY = "89f3ed96ecc09bca008d2dd363649a3f"

   const Search =async ()=>{
        if(searchvalue.trim()===""){
          return 0
        }
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=Metric&appid=${APIKEY}`;
       let response = await fetch(url)
       let Data = await response.json()
       setWeatherdata(Data)
  }
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' onChange={(e)=>{e.preventDefault(),setSearchvalue(e.target.value)}}/>
        <div className="search-icon" onClick={()=>{Search()}}>
          <h1 className='SearchIcon'><BiSearch/></h1>
        </div>
      </div>
        <div className="weather-image">
          <h1 className='CloudSun' ><BsFillCloudSunFill/></h1>
        </div> 
        <div className="weather-temp">{weatherdata?.main.humidity}°C</div>
        <div className="weather-location"> {weatherdata?.name}</div>
        <div className="data-container">
          <div className="element">
            <h1 className="icon"><WiHumidity/></h1>
            <div className="data">
              <div className="humidity-percent">{weatherdata?.main.temp}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <h1 className="icon"><FiWind/></h1>
            <div className="data">
              <div className="humidity-percent">{weatherdata?.wind.speed}km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp