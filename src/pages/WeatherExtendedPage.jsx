//libraries
import React, {useEffect, useState} from 'react';
import {Link} from "gatsby";
//component
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";
import {Helmet} from "react-helmet";
import {useLocation} from "@reach/router";


const WeatherExtendedPage = ({location}) => {
    const path = useLocation();
    const isPath = path.pathname === '/WeatherExtendedPage';
    const [inputCity, setInputCity] = useState(sessionStorage.getItem('city') ?
        sessionStorage.getItem('city') : 'Minsk');

    function searchTheCity(event) {
        sessionStorage.setItem('city', event.target.value);
        setInputCity(event.target.value);
    }


    if (!location) {
        return <h1 className="page-title">Loading...</h1>;
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>WeatherExtendedPage</title>
            </Helmet>
            <Search
                searchTheCity={searchTheCity}
            />
            <WeatherCard
                weatherData={location.state.weatherData}
                city={isPath ? inputCity : location.state.city}
            />
            <Link className="link" to="/">Back</Link>
        </div>
    );
};

export default WeatherExtendedPage;