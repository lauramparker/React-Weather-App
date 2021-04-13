import React, { useContext } from 'react';
import { WeatherContext } from '../providers/WeatherProvider';
import {Row, Col, Container} from 'react-bootstrap';
import API from '../utils/API';

const CurrentWeather = () => {

    const { currentWeather, setCurrentWeather } = useContext(WeatherContext);

    // const [newWeather, setNewWeather] = useState({});

    useEffect(() => {
        API.getCurrentWeather()   //params (searchCity)?
        .then(res => setCurrentWeather({
            name: res.name,
            // date: moment.unix((res.dt).format("MM/DD/YYYY")),
            temp: res.main.temp,
            humidity: res.main.humidity,
            wind: res.wind.speed,
            icon: res.weather[0].icon,
            lat: res.coord.lat,
            long: res.coord.lon
        }))
        .catch(err => console.error(err));
      }, [setCurrentWeather]);


    return(
        <Container>
            <Row>
                <Col>
                 <h4>name: {currentWeather.name} {currentWeather.icon}</h4>
                 <p>temperature: {currentWeather.temp}</p>
                 <p>humidity: {currentWeather.humidity}</p>
                </Col>
            </Row>
        </Container>

    )

}

export default CurrentWeather;
