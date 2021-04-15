import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';

const Search = ({children}) => { 
    //from WeatherContext
    const { searchCity, setSearchCity, setSearchList, searchList } = useContext(WeatherContext);

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
            console.log('Searching for this city: ' + searchCity + searchList)
        } else {console.log('Nooooope!')}
    }, [name, setSearchCity, searchList]);


    return(
        <Container>
            <Row>
                <Col>
                <form onSubmit={handleSubmit}>
                <label>
                City:{searchCity}
                <input 
                  type="text" 
                  name="cityName"
                  value={name} 
                  placeholder="search for a city..." 
                  onChange={(event) => setName(event.target.value)}
                  />{children}
                </label>
                <input type="submit" value="Submit" />
                </form>

                </Col>
            </Row>
        </Container>
    )
}

export default Search;