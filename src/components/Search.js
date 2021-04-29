import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';

const Search = ({ children }) => {
    //from WeatherContext
    const { searchCity, setSearchCity, setSearchList } = useContext(WeatherContext);

    //use component state inherent to search form
    const [name, setName] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchCity(name);
        setSearchList(prevSearchList => ([...prevSearchList, name]));
        if (!name) {
            console.log('oops! City Name not entered')
        }
    }; //end handleSubmit

    //then useEffect (anonymous function) with [dependencies] required as callback to update 
    useEffect(() => {
        if (name) {
            console.log('Searching for this city: ' + searchCity)
        } else { console.log('Try entereing city name again.') }
    }, [name, searchCity]);


    return (
        <Container>
            <Row>
                <Col>
                    <form id='searchBox' onSubmit={handleSubmit}>
                        <label>
                            <input
                                type="text"
                                name="cityName"
                                value={name}
                                placeholder="search for a city..."
                                onChange={(event) => setName(event.target.value)}
                                style={{borderRadius: '5px'}}
                            />{children}
                        </label>
                        <input 
                            type="submit" 
                            value="Search" 
                            style={{color: 'white', fontSize: '14px', borderColor: 'white', borderRadius: '5px', backgroundColor: 'dodgerblue'}} />
                    </form>

                </Col>
            </Row>
        </Container>
    )
}

export default Search;