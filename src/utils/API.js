import axios from 'axios';

// require('dotenv').config();


const API = {

    getCurrentWeather: function (searchCity) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=` + searchCity + `&units=imperial&appid=1b758f2281f1833aa291dff536f4b566`);
    },

    //Seven Day by the hour
    getSevenDay: function (lat, lon) {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=` + lat + `&lon=` + lon + `&exclude=current,minutely,alerts&units=imperial&appid=f52c28a3975d5b60de79eecac8b861ae`);
    },

    //Not using this call; made inline img src ref instead
    getIcon: function (iconCode) {
        return axios.get("https://openweathermap.org/img/wn/" + iconCode + "@2x.png")
    },

}

export default API;