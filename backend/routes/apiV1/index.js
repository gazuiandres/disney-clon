const express = require('express');
const apiRouter = express.Router();

// Services Routers
const usersRouter = require('../../components/users/router');
const audiovisualsRouter = require('../../components/audiovisuals/router');
const categoriesRouter = require('../../components/categories/router');
const bannersRouter = require('../../components/banners/router');
const authRouter = require('../../components/auth/router');

// API V1 Routes
apiRouter.use('/auth', authRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/audiovisuals', audiovisualsRouter);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/banners', bannersRouter);




module.exports = apiRouter;