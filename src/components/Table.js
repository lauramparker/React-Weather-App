import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { WeatherContext } from '../providers/WeatherProvider';
import Moment from 'react-moment';
//Scrollbar npm help: https://www.npmjs.com/package/react-horizontal-scrolling-menu
import ScrollMenu from 'react-horizontal-scrolling-menu';


const Table = ({ children }) => {

    const { sevenDayWeather } = useContext(WeatherContext);

    return (
        <Container id="hourlyBox"> {children}
            <h6 className="title" style={{textAlign:'center', marginTop:'20px'}}>Hourly Weather Conditions</h6>
            <div className="wrapper-hourly">
                <ScrollMenu
                    arrowLeft={<div style={{ fontSize: "30px", color:'white'}}>{" < "}</div>}
                    arrowRight={<div style={{ fontSize: "30px", color:'white' }}>{" > "}</div>}
                    scrollBy={5}
                    //data = assignment required for <ScrollMenu> component.
                    //Entire .map codeblock required for ScrollMenu
                    data={sevenDayWeather.hourly && sevenDayWeather.hourly.slice(0 - 24).map(hourly => {
                        return (
                            <div className="hourly" key={hourly.dt}>
                                <br></br>
                                <Moment unix format="h a">{((hourly.dt))}</Moment><br></br>
                                <img
                                    src={'https://openweathermap.org/img/wn/' + hourly.weather[0].icon + '.png'}
                                    alt="weather icon"
                                />
                                <p>{Math.round(hourly.temp)} °F</p>
                            </div>
                        )
                    })}
                />
            </div>
        </Container>
    )
}

export default Table;