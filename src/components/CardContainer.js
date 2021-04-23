import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
import Moment from 'react-moment';

// import Card from './Card';

const CardContainer = ({children}) => {

    const { fiveDayWeather } = useContext(WeatherContext);

    return(
        <Container id="sevenDayBox"> {children}
            <div className="wrapper">
                {fiveDayWeather.data && fiveDayWeather.data.map(daily => {
                    return(
                        <div className="daily" key={fiveDayWeather.data.dt}>
                            <Moment unix format="dddd MM/DD">{((daily.dt))}</Moment>
                            {daily.weather.icon}
                            High: {daily.temp.max}
                            Low: {daily.temp.max}
                            Humidity: {daily.humidity}%
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default CardContainer;