const catchError = require('../utils/catchError');
const User = require('../models/User');

const getUser = catchError(async (req, res) => {
    const user = await User.findAll();
    return res.json(user); 
});


const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
});


const postUser = catchError(async (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = User.create({ first_name, last_name, email, password, birthday });
    return res.status(201).json(user);
});


const deleteUser = catchError(async (req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.sendStatus(204); 
});


const updateUser = catchError(async (req, res) => {
   const { id } = req.params;
   const { first_name, last_name, email, password, birthday } = req.body;
   const user = await User.update({ first_name, last_name, email, password, birthday }, { where: { id },  returning: true });
   return res.json({ mensaje : "Usuario Actualizacion con exito"}); 
});





module.exports = {
    getUser,
    postUser,
    deleteUser,
    updateUser,
    getOne
}