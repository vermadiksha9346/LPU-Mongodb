const paymentModels = require("../models/payment.models");

const paymentData = async(req, res) =>{

const { amount, currency, status, user } = req.body;
try {
    const payment = new paymentModels({ amount, currency, status, user });

    await payment.save();

    res.status(200).send({ message: "payment data saved", data: payment });

} catch (error) {
    res.status(500).send({ message: "Error saving payment data", error });
}
}

module.exports = { paymentData}