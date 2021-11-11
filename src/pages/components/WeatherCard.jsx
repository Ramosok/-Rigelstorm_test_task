//libraries
import React from 'react';
//helpers
import {FormatDate} from "../../helpers";
// styles
import './weather.css';


const WeatherCard = ({weatherData, city}) => {
    const {forecast} = weatherData || [];
    const [arrForecastDay] = Object.values(forecast)
    //console.log(arrForecastDay)
    return (
        <div className="weather__card"><h3>{city}</h3>
            {arrForecastDay.map(cardDay =>
                <div key={cardDay.date} className="card__container">
                    <div>{FormatDate(cardDay.date)}</div>
                    <div><img src={cardDay.day.condition.icon} alt=""/></div>
                    <div>Sunrise:{cardDay.astro.sunrise}</div>
                    <div>Sunset:{cardDay.astro.sunset}</div>
                    <div>Temperature:{cardDay.day.avgtemp_c}°C</div>
                    <div>Avghumidity: {cardDay.day.avghumidity}</div>
                    <div>{cardDay.day.condition.text}</div>
                </div>)}
        </div>
    );
};

export default WeatherCard;