import React, { useEffect, useContext } from 'react';
import { WeatherContext } from '../providers/WeatherProvider';
import {Row, Col, Container} from 'react-bootstrap';
import API from '../utils/API';
import Search from '../components/Search';

const CurrentWeather = () => {

    const { currentWeather, setCurrentWeather, searchCity } = useContext(WeatherContext);


    useEffect(() => {
            let isMounted = true; // tip from Stack Overflow: 53949393/cant-perform-a-react-state-update-on-an-unmounted-component
            API.getCurrentWeather(searchCity).then(res => {
              if (isMounted) setCurrentWeather({
                name: res.data.name,
                // date: moment.unix((res.dt).format("MM/DD/YYYY")),
                temp: res.data.main.temp,
                humidity: res.data.main.humidity,
                wind: res.data.wind.speed,
                iconCode: res.data.weather[0].icon,
                lat: res.data.coord.lat,
                long: res.data.coord.lon
              });
            })
            .catch(err => console.error(err));
          }, [searchCity, setCurrentWeather]);



    return(
        <Container>
               <Row>
                <Col>
                    <Search />
                </Col>
            </Row>
            <Row>
                <Col>
                <p>NAME of CITY</p>
                 <h4>name: {currentWeather.name}</h4>
                 <img 
                   src={'https://openweathermap.org/img/wn/'+currentWeather.iconCode+'@2x.png'}
                   alt="weather icon"
                   />
                 <p>temperature: {currentWeather.temp} °F</p>
                 <p>humidity: {currentWeather.humidity}</p>
                </Col>
            </Row>
        </Container>

    )

}

export default CurrentWeather;
