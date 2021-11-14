//libraries
import React from 'react';
import {Link} from "gatsby";
import {navigate} from '@reach/router';
import {Helmet} from "react-helmet";
//component
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";


const WeatherExtendedPage = ({location}) => {
    const {state} = location
    const {weatherData} = state

    const params = new URLSearchParams(location.search);
    const city = params.get("city");

    const searchTheCity = (event,city) => {
        event.preventDefault()
        sessionStorage.setItem('city', city);

        navigate(
            `?city=${event.target.search.value}`,
            {replace: true},
        );
    };

    if (!location) {
        return <h1 className="page-title">Loading...</h1>;
    };
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
                weatherData={weatherData}
                city={location.state.city}
            />
            <Link className="link" to="/">Back</Link>
        </div>
    );
};

export default WeatherExtendedPage;