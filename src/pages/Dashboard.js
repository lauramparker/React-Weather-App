import React, { useContext, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
import Search from '../components/Search';
import CurrentWeather from './CurrentWeather';
import CardContainer from '../components/CardContainer';
import Table from '../components/Table';
import List from '../components/List';
import API from '../utils/API';


const Dashboard = () => {

    const { setSevenDayWeather, currentWeather } = useContext(WeatherContext);


    useEffect(() => {
        let isMounted = true;
        let lat = currentWeather.lat;
        let lon = currentWeather.lon;
        API.getSevenDay(lat, lon).then(res => {
            console.log(res)
            if (isMounted) setSevenDayWeather({
                daily: res.data.daily,
                hourly: res.data.hourly
            });
        })
            .catch(err => console.error(err));
    }, [currentWeather, setSevenDayWeather]);


    return (
        <Container className='main'>
            <Row>
                <Col xs={12}>
                    <Search />
                </Col>
            </Row>

            <Row xs={12}>
                <Table />
            </Row>

            <Row>
                <Col xs={9}>
                    <CurrentWeather />
                </Col>
                <Col xs={3}>
                    <List />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <CardContainer />
                </Col>
            </Row>
        </Container>

    )
}

export default Dashboard;