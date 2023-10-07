import React from 'react'
import "./WeatherApp.css"
import {BiSearch} from "react-icons/bi"
import {BsFillCloudSunFill} from "react-icons/bs"
import {WiHumidity} from "react-icons/wi"
import {FiWind} from "react-icons/fi"

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search-icon">
          <h1><BiSearch/></h1>
        </div>
      </div>
        <div className="weather-image">
          <h1 className='CloudSun' ><BsFillCloudSunFill/></h1>
        </div> 
        <div className="weather-temp">24°C</div>
        <div className="weather-location"> London</div>
        <div className="data-container">
          <div className="element">
            <h1 className="icon"><WiHumidity/></h1>
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <h1 className="icon"><FiWind/></h1>
            <div className="data">
              <div className="humidity-percent">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp