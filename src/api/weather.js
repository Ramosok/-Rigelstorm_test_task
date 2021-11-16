import {generateQueryString, sendRequest} from './index';

export const getCurrentWeather = data => {
    const queryString = generateQueryString(data);

    return sendRequest( '/forecast.json',queryString,'days', 3);
};


//Тут метод для получение прогноза погоды на 10 дней, но к сожалению в API возвращает только 3. хотя в доках было что 10 можно запрасить.
/*export const getForecastWeather = data => {
    const queryString = generateQueryString(data);

    return sendRequest('/forecast.json',queryString,'days', 10);
};*/

