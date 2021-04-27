import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';

const List = () => {
    const { searchList } = useContext(WeatherContext);

    return (
        <Container>
            <Row>
                <Col>
                    <h6>Searched Cities</h6>
                    {searchList.map((item) =>
                        <li>{item}</li>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default List;