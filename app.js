require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');
const preferencesRoutes = require('./routes/preferencesRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', newsRoutes);
app.use('/api', preferencesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
