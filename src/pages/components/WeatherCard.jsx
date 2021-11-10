//libraries
import React from 'react';
// styles
import './weather.css';
const WeatherCard = ({weatherData}) => {
    const {
        location: { name } = {},
        current: {
            temp_c,
            temp_f,
            wind_kph,
            condition: {
                icon,
                text,
            } = {}
        } = {},

    } = weatherData || {};

    return (
        <div className="weather__card">
            <div><img src={icon} alt=""/></div>
            <div>{name}</div>
            <div>Температура: {temp_c}°C</div>
            <div>Температура: {temp_f}℉</div>
            <div>Скорость ветра: {wind_kph}</div>
            <div>{text}</div>
        </div>
    );
};

export default WeatherCard;