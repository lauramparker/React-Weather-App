import React, { useContext, useEffect } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
import NavBar from '../components/NavBar';
import CurrentWeather from './CurrentWeather';
import CardContainer from '../components/CardContainer';
import List from '../components/List';
import API from '../utils/API';


const Dashboard = () => {

    const { setFiveDayWeather, currentWeather } = useContext(WeatherContext);


    useEffect(() => {
            let isMounted = true;
            let lat = currentWeather.lat;
            let lon = currentWeather.lon;
            API.getSevenDay(lat,lon).then(res => {
              if (isMounted) setFiveDayWeather({
                dayOne: res.data.daily[0],
                dayTwo: res.data.daily[1],
                dayThree: res.data.daily[2],
                dayFour: res.data.daily[3],
                dayFive: res.data.daily[4],
                daySix: res.data.daily[5],
                daySeven: res.data.daily[6],
              });
            })
            .catch(err => console.error(err));
          }, [currentWeather, setFiveDayWeather]);


    return (
        <Container>
            {/* <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row> */}

            

            <Row>
                <Col>
                    <CurrentWeather />
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <CardContainer />
                </Col>
            </Row>

            <Row>
                <Col>
                    <List />
                </Col>
            </Row>
        </Container>
        
    )
}

export default Dashboard;