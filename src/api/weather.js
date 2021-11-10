import {generateQueryString, sendRequest} from './index';

export const getCurrentWeather = data => {
    const queryString = generateQueryString(data);

    return sendRequest( queryString);
};


/*
export const getForecastWeather = data => {
    const queryString = generateQueryString(data);

    return sendRequest('/forecast', queryString);
};

export const getHistoricalWeather = data => {
    const queryString = generateQueryString(data);

    return sendRequest('/historical', queryString);
};*/
