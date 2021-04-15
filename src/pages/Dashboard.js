import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import CurrentWeather from './CurrentWeather';
import CardContainer from '../components/CardContainer';
import List from '../components/List';


const Dashboard = () => {

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