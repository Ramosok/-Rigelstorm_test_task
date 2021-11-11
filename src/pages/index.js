//libraries
import React, {useCallback, useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {Link} from "gatsby";
//component
import WeatherCard from "./components/WeatherCard";
import Button from "./components/Button";
//api
import {getCurrentWeather} from "../api/weather";
// styles
import './index.css';


// markup
const IndexPage = () => {
    const arrCity = [
        {
            id: 1,
            city: 'Minsk',
            title: 'Минск'
        },
        {
            id: 2,
            city: 'Moscow',
            title: 'Москва'
        },
        {
            id: 3,
            city: 'Bratislava',
            title: 'Братислава'
        }
    ];

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(sessionStorage.getItem('city') ? sessionStorage.getItem('city') :'Minsk');

    function changingTheCity(event) {
        setCity(event.target.name)
        sessionStorage.setItem('city', event.target.name);
    }

    const fetchWeather = useCallback(async () => {
        try {
            const data = await getCurrentWeather({query: city});

            setWeatherData(data);

        } catch (e) {
            console.log(e);
        }
    }, [city]);
    useEffect(() => {
        fetchWeather();
    }, [fetchWeather])

    if (!weatherData) {
        return <h1 className="page-title">Loading...</h1>;
    }

    return (
        <main className="main">
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
            {/* <div><Link to="/app">Catalog</Link></div>
            <div><Link to="/proFile">ProFile</Link></div>*/}
        </main>
    )
}

export default IndexPage
