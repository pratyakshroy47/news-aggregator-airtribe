// newsController.js
const axios = require('axios');
const users = require('../data/users');
const { fetchNews } = require('../utils/newsApi');

exports.getNews = async (req, res) => {
    try {
        const user = users[req.userData.userId];
        const articles = await fetchNews(user.preferences);
        res.status(200).json({ articles });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch news' });
    }
};

exports.getPreferences = async (req, res) => {
    try {
        const user = users[req.userData.userId];
        res.status(200).json({ preferences: user.preferences });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving preferences' });
    }
};

exports.updatePreferences = (req, res) => {
    try {
        const user = users[req.userData.userId];
        user.preferences = req.body;
        res.status(200).json({ message: 'Preferences updated' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update preferences' });
    }
};
