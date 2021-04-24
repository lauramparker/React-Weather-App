import React, { useContext, useEffect } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import CurrentWeather from './CurrentWeather';
import CardContainer from '../components/CardContainer';
import List from '../components/List';
import API from '../utils/API';


const Dashboard = () => {

    const { setSevenDayWeather, currentWeather } = useContext(WeatherContext);


    useEffect(() => {
            let isMounted = true;
            let lat = currentWeather.lat;
            let lon = currentWeather.lon;
            API.getSevenDay(lat,lon).then(res => {
                console.log(res)
              if (isMounted) setSevenDayWeather({
                data: res.data.daily,
              });
            })
            .catch(err => console.error(err));
          }, [currentWeather, setSevenDayWeather]);


    return (
        <Container>
            {/* <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row> */}

            

            <Row>
                <Col>
                    <Search />
                </Col>
            </Row>
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