import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
import Moment from 'react-moment';


const Table = ({children}) => {

    const { sevenDayWeather } = useContext(WeatherContext);

    return(
        <Container id="hourlyBox"> {children}
            <div className="table-hourly">
                {sevenDayWeather.hourly && sevenDayWeather.hourly.slice(1).map(hourly => { //slice(1) starts the map from the second array element
                    return(
                        <div className="daily" key={sevenDayWeather.hourly.dt}>
                            <Moment unix format="hh:mm">{((hourly.dt))}</Moment>
                            <Row>
                                <Col>
                                <img
                                src={'https://openweathermap.org/img/wn/'+hourly.weather[0].icon+'@2x.png'}
                                alt="weather icon"
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                High: {Math.round(daily.temp.max)}<br></br>
                                Low: {Math.round(daily.temp.max)}<br></br>
                                Humidity: {daily.humidity}%<br></br>
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Table;