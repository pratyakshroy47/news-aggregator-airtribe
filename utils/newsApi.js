const axios = require('axios');

async function fetchNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch news:', error);
        throw error;
    }
}
