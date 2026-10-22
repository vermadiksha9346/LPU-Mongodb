const { UserModel } = require("../models/user.model");

const saveData = async (req, res) => {
    const { username, email, password,age,gender,address,phoneNumber } = req.body;

    try{
        const userData = new UserModel({username, email, password, age, gender, address, phoneNumber});

        await userData.save();

        res.send({message: "Data saved successfully", data: userData});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

module.exports = { saveData };