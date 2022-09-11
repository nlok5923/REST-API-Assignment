const mongoose = require('mongoose')
const Double = require("@mongoosejs/double");


const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    customer_email: {
        type: String,
        required: true,
    },
    customer_phone: {
        type: String,
        required: true,
    },
    customer_balance: {
        type: Double,
        required: true,
    }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer