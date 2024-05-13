const users = require('../data/users');

exports.getPreferences = (req, res) => {
    const user = users[req.userData.userId];
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ preferences: user.preferences });
};

exports.updatePreferences = (req, res) => {
    const user = users[req.userData.userId];
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    user.preferences = req.body; // Ensure this body is validated properly
    res.status(200).json({ message: 'Preferences updated' });
};
