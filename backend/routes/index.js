const express = require('express');

const apiV1Router = require('./apiV1/');

const apiRouter = (app) => {
    app.use('/api/v1/', apiV1Router);
}

module.exports = apiRouter;