import React, { useContext } from 'react';
import { WeatherContext } from '../providers/WeatherProvider';
import axios from 'axios';

const { searchCity } = useContext(WeatherContext);

const API = {
    
    //Open Weather Map API keys
    // var APIKey = "1b758f2281f1833aa291dff536f4b566";  //Current forecast APIKEY
    // var fivedayAPIKey = "65af81772398c8021de436a5afa38da3";  //5 day forecast API Key
    // var uvIndexAPIKey = "1f3df3f7624cfc5a7a0d585bce621279" //Current UV Index API Key
    // var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=1b758f2281f1833aa291dff536f4b566";
    // var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + searchCity + "&cnt=5&appid=65af81772398c8021de436a5afa38da3";

    getCurrentWeather: function() {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=1b758f2281f1833aa291dff536f4b566")
        
    },

    getFiveDay: function() {
        return axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=" + searchCity + "&cnt=5&appid=65af81772398c8021de436a5afa38da3")
    }
}

export default API;