import React, { useEffect, useState, useRef} from "react";
import "./Weather.css"
import search from "./assets/search.png";
import clear from "./assets/clear.png";
import cloud from "./assets/cloud.png";
import drizzle from "./assets/drizzle.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import humidity from "./assets/humidity.png";
import wind from "./assets/wind.png";


function Weather(){

    const inputRef = useRef();

    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d": snow,
        "13n": snow
    }

    const searchFunction = async (city)=>{
        if(city === ""){
            alert("Enter City Name");
            return;
        }
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }

            console.log(data);

            const icon = allIcons[data.weather[0].icon] || clear;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            });
        }catch (error){
            setWeatherData(false);
        }
    }

    useEffect(()=>{
        searchFunction("London");
        console.error("Error in fetching weather data");
    },[])

    return(
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Search" ref={inputRef}></input>
                <img src={search} alt="" onClick={()=>searchFunction(inputRef.current.value)}></img>
            </div>
            {weatherData ? 
                <>
                <img src={weatherData.icon} alt="" className="weather-icon"></img>
                <p className="temperature">{weatherData.temperature}°C</p>
                <p className="location">{weatherData.location}</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity} alt=""></img>
                        <div>
                            <p>{weatherData.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind} alt=""></img>
                        <div>
                            <p>{weatherData.windSpeed} km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
                </> 
            : 
                <>
                
                </>}
            
        </div>
    );
}

export default Weather;