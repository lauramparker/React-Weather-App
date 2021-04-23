import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
import Moment from 'react-moment';

// import Card from './Card';

const CardContainer = ({children}) => {

    const { sevenDayWeather } = useContext(WeatherContext);

    return(
        <Container id="sevenDayBox"> {children}
            <div className="wrapper">
                {sevenDayWeather.data && sevenDayWeather.data.slice(1).map(daily => { //slice(1) starts the map from the second array element
                    return(
                        <div className="daily" key={sevenDayWeather.data.dt}>
                            <Moment unix format="dddd MM/DD">{((daily.dt))}</Moment>
                            <Row>
                                <Col>
                                <img 
                                src={'https://openweathermap.org/img/wn/'+daily.weather[0].icon+'@2x.png'}
                                alt="weather icon"
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                High: {daily.temp.max}
                                Low: {daily.temp.max}
                                Humidity: {daily.humidity}%
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default CardContainer;