//libraries
import React, {useCallback, useEffect, useState} from "react"
import {Helmet} from "react-helmet"
//api
import {getCurrentWeather} from "../api/weather";
//page
import WeatherPage from "./WeatherPage";
// styles
import './index.css';
import Search from "./components/Search";
import {Link} from "gatsby";


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
    const [city, setCity] = useState(sessionStorage.getItem('city') ?
        sessionStorage.getItem('city') : 'Minsk');

    const changingTheCity = (event) => {
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

            <WeatherPage
                weatherData={weatherData}
                city={city}
                arrCity={arrCity}
                changingTheCity={changingTheCity}
            />
            <Link className="link" to="/WeatherExtendedPage"
                  state={{weatherData: weatherData,city: city}}
            >WeatherExtendedPage</Link>
        </main>
    )
}

export default IndexPage
