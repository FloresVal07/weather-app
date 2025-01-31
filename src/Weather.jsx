import React from "react";
import "./Weather.css"
import search from "./assets/search.png";
import clear from "./assets/clear.png";
import cloud from "./assets/cloud.png";
import drizzle from "./assets/drizzle.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import humidity from "./assets/humidity.png";


function Weather(){
    return(
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="search"></input>
                <img src={search} alt=""></img>
            </div>
            <img src={clear} alt="" className="weather-icon"></img>
            <p className="temperature">16°C</p>
            <p className="location">London</p>
        </div>
    );
}

export default Weather;