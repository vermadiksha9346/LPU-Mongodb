const express = require("express");
const { products } = require("../controllers/products.contoller");

const paymentRouter = express.Router();

paymentRouter.post("/", products);

module.exports = { productRouter };