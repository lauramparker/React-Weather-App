import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
// import NavBar from '../components/NavBar';
import Search from '../components/Search';
import CurrentWeather from './CurrentWeather';
import CardContainer from '../components/CardContainer';
import Table from '../components/Table';
import List from '../components/List';
import API from '../utils/API';


const Dashboard = () => {

    const { setSevenDayWeather, currentWeather, searchCity } = useContext(WeatherContext);

    const [photoRef, setPhotoRef] = useState('');

    // var image = URL.createObjectURL(createImageURL);

    //Google Places API
    var api_key = 'AIzaSyDF838NY5us8fHCZuvjeBSN-yEgdAaLVf8';


    useEffect(() => {
        let isMounted = true;
        let lat = currentWeather.lat;
        let lon = currentWeather.lon;
        API.getSevenDay(lat, lon).then(res => {
            console.log(res)
            if (isMounted) setSevenDayWeather({
                data: res.data.daily,
                hourly: res.data.hourly
            });
        })
            .catch(err => console.error(err));
    }, [currentWeather, setSevenDayWeather]);


    //Calling Google Places
    useEffect(() => {
        let isMounted = true;
        API.getPhoto(searchCity, api_key).then(res => {
            if (isMounted) {
                console.log(res);
                setPhotoRef(res.data.candidates[0].photos[0].photo_reference)
            }
        })
            .catch(err => console.log(err));
    }, [searchCity, api_key, setPhotoRef]);


    //Creating image from returned image data
    const createImageURL = () => {
        API.convertPhotoData(photoRef, api_key).then(res =>
            res.blob())
            .catch(err => console.log(err));
    }


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
                <Table></Table>
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

                <Col>
                    <div className='city-image'>
                        <img
                            src={'https://maps.googleapis.com/maps/api/place/photo?photoreference=' + photoRef + '&key=' + api_key + '&maxwidth=400&maxheight=400'}
                            alt="searched city photo"
                        />
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Dashboard;