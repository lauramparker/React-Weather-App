import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
import Moment from 'react-moment';  


const CardContainer = () => {

    const { sevenDayWeather } = useContext(WeatherContext);

    return (
        <Container>
            <div className="wrapper-sevenDay">
                {sevenDayWeather.daily && sevenDayWeather.daily.slice(1).map(daily => { //slice(1) starts the map from the second array element
                    return (
                        <div className="daily" key={daily.dt}>
                            <h6><Moment unix format="ddd, MMMM Do">{((daily.dt))}</Moment></h6>
                            <Row>
                                <Col>
                                    <img
                                        src={'https://openweathermap.org/img/wn/' + daily.weather[0].icon + '@2x.png'}
                                        alt="weather icon"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                high: {Math.round(daily.temp.max)} °F<br></br>
                                low: {Math.round(daily.temp.max)} °F<br></br>
                                humidity: {daily.humidity} %<br></br>
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