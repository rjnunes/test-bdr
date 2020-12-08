  
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Aluno = new Schema(
    {
        nome: { type: String, required: true },
        email: { type: String, required: true },
        dataNascimento: { type: Date, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('alunos', Aluno)