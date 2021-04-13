import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const CardContainer = () => {

    return(
        <Container>
            <Row>
                <Col>
                <h4>This is the Card Container.</h4>
                <p>Will map the 5 day forecast to the cards.</p>
                </Col>
            </Row>
        </Container>

    )
}

export default CardContainer;