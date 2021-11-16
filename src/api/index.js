//Эти данные по хорошему должны быть в .env файле, но для тестового задания я поместил их сюда.
const baseUrl = 'http://api.weatherapi.com/v1';
const apiKey = '7096aeed0ceb4a85993134438210711';

export const sendRequest = async (
    path,
    query,
    days,
    quantity,
    method = 'GET',
    body = {},
    headers = {},
) => {
    const requestUrl = `${baseUrl}${path}?key=${apiKey}&q=${query}&${days}=${quantity}`;
    const options = {
        method,
        mode: 'cors',
        headers: {
            ...headers,
        }
    };

    if (method === 'POST' || method === 'PUT') {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(requestUrl, options);

    const contentType = response.headers.get('Content-Type');

    if (contentType === 'application/json') {

        return await response.json();
    }

    throw new Error('Unexpected content type');
};

export const generateQueryString = (data = {}) => {
    let query = '';

    Object.keys(data).forEach(key => {
        query += `${data[key]}`;
    });

    return query;
}
