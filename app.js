const express = require('express');
const app = express();
const eventsRoutes = require('./api/routes/events');

app.use('/events', eventsRoutes);

module.exports = app;