const { postUser, getUser, deleteUser, updateUser, getOne } = require('../controller/user.controller');
const express = require('express');


const userRoute = express.Router();


userRoute.route("/users")
    .get(getUser)
    .post(postUser);


userRoute.route("/users/:id")
    .get(getOne)
    .delete(deleteUser)
    .patch(updateUser);


module.exports = userRoute;