const Curso = require('../models/curso.model')

createCurso = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({sucess: false, error: 'Deve ser fornecido um curso'})
    }

    const curso = new Curso(body)

    if (!curso) {
        return res.status(400).json({sucess: false, error: 'Curso fornecido não respeita as definições da API'})
    }
    
    curso
        .save()
        .then(() => {
            return res.status(201).json({
                sucess: true,
                id: curso._id,
                message: 'Curso criado!'
            })
        })
        .catch( error => {
            return res.status(400).json({
                error,
                message: 'Curso não criado!'
            })
        })
    
};

updateCurso = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Deve ser fornecido um corpo de requisição para atualizar',
        })
    }

    Curso.findOne({ _id: req.params.id }, (err, curso) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Curso não encontrado!',
            });
        }
        
        if (body.titulo) {
            curso.titulo = body.titulo;
        }
        if (body.descricao) {
            curso.descricao = body.descricao;
        }
        
        curso
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: curso._id,
                    message: 'Curso atualizado!'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Curso não atualizado!'
                });
            });
    })
};

deleteCurso = async (req, res) => {
    await Curso.findOneAndDelete({ _id: req.params.id }, {})
        .then(curso => {
            if (curso) {
                return res.status(200).json({ success: true, data: curso, message: "Curso deletado" })
            } else {
                return res.status(404).json({ 
                    success: false, 
                    error: 'Curso não encontrado!'
                })
            }
        })
        .catch(err => {
            return res.status(422).json({ success: false, error: err })
        })
};

getCursoById = async (req, res) => {
    await Curso.findOne({ _id: req.params.id }, (err, curso) => {
        if (err) {
            return res.status(404).json({ success: false, error: "Curso não encontrado" })
        }

        return res.status(200).json({ success: true, data: curso })
    }).catch(err => console.log(err))
};

getCursos = async (req, res) => {
    await Curso.find({}, (err, cursos) => {
        if (err) {
            return res.status(400).json({ 
                success: false, error: err 
            })
        }
        if (!cursos.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Cursos não encontrado!' })
        }
        return res.status(200).json({ success: true, data: cursos })
    }).catch(err => console.log(err))
}

module.exports = {
    createCurso,
    updateCurso,
    deleteCurso,
    getCursos,
    getCursoById,
}