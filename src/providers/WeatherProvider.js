import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {

    const [searchCity, setSearchCity] = useState('Columbus');
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
    const [sevenDayWeather, setSevenDayWeather] = useState({
        data:[],
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
                sevenDayWeather,
                setSevenDayWeather
            }}
            >{children}
            </WeatherContext.Provider>
    )
};

export default WeatherProvider;