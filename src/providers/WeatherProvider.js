import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {

    const [searchCity, setSearchCity] = useState();
    const [searchList, setSearchList] = useState([]);
    const [currentWeather, setCurrentWeather] = useState();
    const [fiveDayWeather, setFiveDayWeather] = useState();


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