const express = require('express');
const { paymentData } = require('../controllers/payment.controller');

const paymentRouter = express.Router();

paymentRouter.post("/payment", paymentData);


module.exports ={paymentRouter}