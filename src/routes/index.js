const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');

// colocar las rutas aquí
router.use(userRouter);

module.exports = router;