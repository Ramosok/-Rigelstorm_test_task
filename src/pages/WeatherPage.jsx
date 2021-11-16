//libraries
import React from 'react';
import {Helmet} from "react-helmet";
//components
import WeatherCard from "./components/WeatherCard";
import Button from "./components/Button";


const WeatherPage = ({weatherData, city, changingTheCity, arrCity}) => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Weather</title>
            </Helmet>
            <WeatherCard
                weatherData={weatherData}
                city={city}
            />
            <div className="button__container">
                {arrCity.map(button =>
                    <Button
                        key={button.id}
                        changingTheCity={changingTheCity}
                        city={button.city}
                        id={button.id}
                        title={button.title}
                    />)
                }
            </div>
        </div>
    );
};

export default WeatherPage;