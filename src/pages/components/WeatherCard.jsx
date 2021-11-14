//libraries
import React from 'react';
import {useLocation} from "@reach/router";
//helpers
import {FormatDate, FormatTime} from "../../helpers";
// styles
import './weather.css';


const WeatherCard = ({weatherData, city}) => {

    const path = useLocation();
    const isPath = path.pathname.includes('WeatherExtendedPage');
    const {forecast} = weatherData || [];
    const [arrForecastDay] = Object.values(forecast) || [];

    return (
        <div className="weather__card"><h1 className="weather__card__title">{city}</h1>
            {arrForecastDay.map(cardDay =>
                <div key={cardDay.date} className="card__container">
                    <div>{FormatDate(cardDay.date)}</div>
                    <div><img src={cardDay.day.condition.icon} alt=""/></div>
                    <div>Sunrise:{cardDay.astro.sunrise}</div>
                    <div>Sunset:{cardDay.astro.sunset}</div>
                    <div>Temperature:{cardDay.day.avgtemp_c}°C</div>
                    <div>Avghumidity: {cardDay.day.avghumidity}</div>
                    <div>{cardDay.day.condition.text}</div>
                    {isPath && (cardDay.hour.map(hour =>
                        <div key={hour.time}>{FormatTime(hour.time)}
                            <span className="temp">Temperature:</span>
                            <span>{hour.temp_c}</span></div>))}
                </div>)}
        </div>
    );
};

export default WeatherCard;