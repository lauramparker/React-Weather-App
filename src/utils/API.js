import axios from 'axios';


const API = {

    getCurrentWeather: function(searchCity) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&appid=1b758f2281f1833aa291dff536f4b566")
    },

    getFiveDay: function(searchCity) {
        return axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=" + searchCity + "&units=imperial&cnt=5&appid=65af81772398c8021de436a5afa38da3")
    },

    getSevenDay: function(lat, lon) {
        return axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,hourly,minutely,alerts&units=imperial&appid=f52c28a3975d5b60de79eecac8b861ae")
    },

    //Did not use; made inline img src ref instead
    getIcon: function(iconCode) {
        return axios.get("https://openweathermap.org/img/wn/" + iconCode +"@2x.png")
    }
}

export default API;