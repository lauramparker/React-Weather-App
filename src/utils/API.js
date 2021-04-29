import axios from 'axios';


const API = {

    getCurrentWeather: function (searchCity) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&appid=1b758f2281f1833aa291dff536f4b566")
    },

    //Seven Day by the hour
    getSevenDay: function (lat, lon) {
        return axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,alerts&units=imperial&appid=f52c28a3975d5b60de79eecac8b861ae")
    },

    //Not using this call; made inline img src ref instead
    getIcon: function (iconCode) {
        return axios.get("https://openweathermap.org/img/wn/" + iconCode + "@2x.png")
    },

    //Google Places API 
    //(& resolving Google non-CORS with proxyURL, see ref: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141)
    // getPhoto: function (searchCity, api_key) {
    //     return axios.get('https://cors-anywhere.herokuapp.com/' + 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + searchCity + '&key=' + api_key + '&inputtype=textquery&fields=name,photos')
    // },

    // //Google Places API to return photo
    // convertPhotoData: function (photoRef, api_key) {
    //     return fetch('https://maps.googleapis.com/maps/api/place/photo?photoreference=' + photoRef + '&key=' + api_key + '&maxwidth=400&maxheight=400')
    // }
}

export default API;