import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';

const Search = () => {  //{children}
    //from WeatherContext
    const { setSearchCity, setSearchList } = useContext(WeatherContext);

    //assignment to read value of current input city name
    const [name, setName] = useState('');

    //could also do this in input line as    onChange={(event) => setName(event.target.value)}
    const handleChange = (event) => {
        setName({value: event.target.value});
      };

    const handleSubmit = (event) => {
        console.log('Searching for this city: ' + name);
        event.preventDefault();
        if (!name) {
            console.log('oops! City Name not entered')
        }
    }; //end handleSubmit

    //then useEffect (anonymous function) with [dependency] required as callback to update 
    //update both searchCity and searchList
    useEffect(() => {
        if (name) {
            setSearchCity({ cityName: name })
            setSearchList({ ...setSearchList.push(name)}) //also maybe?  setSearchList({searchList: [setSearchList, name]})
        }
    }, [name]);


    return(
        <Container>
            <Row>
                <Col>
                <form onSubmit={handleSubmit}>
                <label>
                City:
                <input type="text" value={name} placeholder="search for a city..." onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>

                </Col>
            </Row>
        </Container>
    )
}

export default Search;