import axios from 'axios';

const baseUrl = 'https://api.api.ai/v1/';
// query?v=20150910'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer b4d2b41c825f4c4fa47cf77b4aab97c1',
};

const query = (query, sessionId) => {
    const data = {
        query,
        lang: 'en',
        sessionId,
    };
    return axios.post(baseUrl + 'query?v=20150910', JSON.stringify(data), {headers});
};

export {query}