const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const sessionRoutes = require('./routes/sessions');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/sessions', sessionRoutes);

app.get('/', (req, res) => {
  res.send('🚀 API فضفضة جاهزة للعمل');
});

app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`);
});
