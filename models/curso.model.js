  
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Curso = new Schema(
    {
        titulo: { type: String, required: true },
        descricao: { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('cursos', Curso)