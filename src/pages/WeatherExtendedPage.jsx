//libraries
import React, {useState} from 'react';
import {Link} from "gatsby";
import {navigate, useLocation} from '@reach/router';
import {Helmet} from "react-helmet";
//component
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";


const WeatherExtendedPage = ({location}) => {
/*
    const path = useLocation();
    const isPathW = path.pathname;

    const [inputCity, setInputCity] = useState(location.search);
console.log(location.search)
    location.state.isPath = isPathW
*/

    const searchTheCity = (event) => {
        event.preventDefault()
        //setInputCity(event.target.search.value);
        sessionStorage.setItem('city', event.target.search.value);

        navigate(
            `?city=${event.target.search.value}`,
            {replace: true}
        );
    };
    console.log(location.state);

    if (!location) {
        return <h1 className="page-title">Loading...</h1>;
    }
    ;
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
                city={sessionStorage.getItem('city') ? sessionStorage.getItem('city') : location.state.city}
            />
            <Link className="link" to="/">Back</Link>
        </div>
    );
};

export default WeatherExtendedPage;