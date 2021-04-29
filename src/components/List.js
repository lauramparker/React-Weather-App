import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';

const List = () => {
    const { searchList, setSearchCity } = useContext(WeatherContext);

    const myCitiesList = Array.from(new Set(searchList)); //combination of Set and Array.from methods to get unique values (in this case from an array)


    return (
        <Container>
            <Row>
                <Col>
                    <h3 style={{textAlign: 'center', marginTop: '60px', opacity: '0.8'}}>My Places</h3>
                    <div className='searchList'>{myCitiesList.map((item) =>
                        <div key={item}>
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