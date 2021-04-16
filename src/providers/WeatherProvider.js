import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {

    const [searchCity, setSearchCity] = useState();
    const [searchList, setSearchList] = useState([]);
    const [currentWeather, setCurrentWeather] = useState({
        name:'',
        temp:'',
        humidity:'',
        wind:'',
        iconCode:'',
        lat:'',
        lon:''
    });
    const [fiveDayWeather, setFiveDayWeather] = useState({
        dayOne:[],
        dayTwo:[],
        dayThree:[],
        dayFour:[],
        dayFive:[],
        daySix:[],
        daySeven:[]
    });


    return (
        <WeatherContext.Provider
            value={{
                searchCity,
                setSearchCity,
                searchList,
                setSearchList,
                currentWeather,
                setCurrentWeather,
                fiveDayWeather,
                setFiveDayWeather
            }}
            >{children}
            </WeatherContext.Provider>
    )
};

export default WeatherProvider;