import React from 'react';
import axios from 'axios';


const API = {

    getCurrentWeather: function(searchCity) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=1b758f2281f1833aa291dff536f4b566")
        
    },

    getFiveDay: function(searchCity) {
        return axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=" + searchCity + "&cnt=5&appid=65af81772398c8021de436a5afa38da3")
    }
}

export default API;