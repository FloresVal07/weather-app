import React from "react";
import "./Weather.css"
import search from "./assets/search.png";


function Weather(){
    return(
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="search"></input>
                <img src={search} alt=""></img>
            </div>
        </div>
    );
}

export default Weather;