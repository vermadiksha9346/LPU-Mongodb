const express = require('express');
const { saveData } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post("/savedata", saveData);

module.exports = {userRouter};