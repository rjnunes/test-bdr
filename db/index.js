const usuario = "admin";
const senha = "admin";
const banco = "test";
const servidor = "cluster0.k4ufd.mongodb.net";

const mongoose = require('mongoose')

mongoose
    .connect(`mongodb+srv://${usuario}:${senha}@${servidor}/${banco}?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db