import { useEffect, useState, useMemo } from 'react'
import "./WeatherApp.css"
import { BiSearch } from "react-icons/bi"
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiDayCloudyHigh,
  WiNightCloudyHigh,
  WiDayShowers,
  WiNightShowers,
  WiDayRain,
  WiNightRain,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDaySnow,
  WiNightSnow,
  WiDayFog,
  WiNightFog
} from 'react-icons/wi';
import { WiHumidity } from "react-icons/wi"
import { FiWind } from "react-icons/fi"
import { WeatherData } from "../../interface/weatherdata"

const WeatherApp = () => {
  let [weatherdata, setWeatherdata] = useState<WeatherData>()
  let [searchvalue, setSearchvalue] = useState<String>("Malappuram");
  let [iconState, setIconState] = useState<string>("")
  let APIKEY = import.meta.env.VITE_APIKEY

  const Search = async () => {
    if (searchvalue.trim() === "") return;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=Metric&appid=${APIKEY}`;
    let response = await fetch(url)
    let Data = await response.json()
    setIconState(Data?.weather[0]?.icon as string);
    setWeatherdata(Data);
  };

  useEffect(()=>{
    Search()
  },[]);

  const iconsMap = useMemo(() => {
    return new Map([
      ["01d", <WiDaySunny />],        
      ["01n", <WiNightClear />],        
      ["02d", <WiDayCloudy />],        
      ["02n", <WiNightCloudy />],        
      ["03d", <WiDayCloudyHigh />],      
      ["03n", <WiNightCloudyHigh />],   
      ["04d", <WiDayCloudyHigh />],
      ["04n", <WiNightCloudyHigh />],
      ["09d", <WiDayShowers />],    
      ["09n", <WiNightShowers />],    
      ["10d", <WiDayRain />],    
      ["10n", <WiNightRain />],    
      ["11d", <WiDayThunderstorm />],    
      ["11n", <WiNightThunderstorm />], 
      ["13d", <WiDaySnow />],    
      ["13n", <WiNightSnow />],         
      ["50d", <WiDayFog />],    
      ["50n", <WiNightFog />],    
    ])
  }, []);
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' onChange={(e) => { e.preventDefault(), setSearchvalue(e.target.value) }} />
        <div className="search-icon" onClick={() => { Search() }}>
          <h1 className='SearchIcon'><BiSearch /></h1>
        </div>
      </div>
      <div className="weather-image">
        <h1 className='CloudSun'>{iconsMap.get(iconState)}</h1>
      </div>
      <div className="weather-temp">{weatherdata?.main.humidity}°C</div>
      <div className="weather-location"> {weatherdata?.name}</div>
      <div className="data-container">
        <div className="element">
          <h1 className="icon"><WiHumidity /></h1>
          <div className="data">
            <div className="humidity-percent">{weatherdata?.main.temp}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <h1 className="icon"><FiWind /></h1>
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