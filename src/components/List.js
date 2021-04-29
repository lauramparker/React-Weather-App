import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';

const List = () => {
    const { searchList, setSearchCity } = useContext(WeatherContext);


    return (
        <Container>
            <Row>
                <Col>
                    <h6 style={{textAlign: 'center', marginTop: '20px'}}>My City List</h6>
                    <div className='searchList'>{searchList.map((item) =>
                        <div>
                            <button 
                            className='searchListBtn'
                            onClick={(event)=> setSearchCity(event.target.value)}
                            value={item}
                            >{item}
                            </button>
                        </div>
                    )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default List;