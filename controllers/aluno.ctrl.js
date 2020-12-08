const Aluno = require('../models/aluno.model')

createAluno = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({sucess: false, error: 'Deve ser fornecido um aluno'})
    }

    const aluno = new Aluno(body)

    if (!aluno) {
        return res.status(400).json({sucess: false, error: 'Aluno fornecido não respeita as definições da API'})
    }
    
    aluno
        .save()
        .then(() => {
            return res.status(201).json({
                sucess: true,
                id: aluno._id,
                message: 'Aluno criado!'
            })
        })
        .catch( error => {
            return res.status(400).json({
                error,
                message: 'Aluno não criado!'
            })
        })
    
};

updateAluno = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Deve ser fornecido um corpo de requisição para atualizar',
        })
    }

    Aluno.findOne({ _id: req.params.id }, (err, aluno) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Aluno não encontrado!',
            });
        }
        aluno.nome = body.nome;
        aluno.email = body.email;
        aluno.dataNascimento = body.dataNascimento;
        aluno
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: aluno._id,
                    message: 'Aluno atualizado!'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Aluno não atualizado!'
                });
            });
    })
};

deleteAluno = async (req, res) => {
    await Aluno.findOneAndDelete({ _id: req.params.id }, (err, aluno) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!aluno) {
            return res.status(404).json({ 
                success: false, 
                error: 'Aluno não encontrado!'
            })
        }

        return res.status(200).json({ success: true, data: aluno })
    }).catch(err => console.log(err))
};

getAlunoById = async (req, res) => {
    await Aluno.findOne({ _id: req.params.id }, (err, aluno) => {
        if (err) {
            return res.status(404).json({ success: false, error: "Aluno não encontrado" })
        }

        return res.status(200).json({ success: true, data: aluno })
    }).catch(err => console.log(err))
};

getAlunos = async (req, res) => {
    await Aluno.find({}, (err, alunos) => {
        if (err) {
            return res.status(400).json({ 
                success: false, error: err 
            })
        }
        if (!alunos.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Alunos não encontrado!' })
        }
        return res.status(200).json({ success: true, data: alunos })
    }).catch(err => console.log(err))
}

module.exports = {
    createAluno,
    updateAluno,
    deleteAluno,
    getAlunos,
    getAlunoById,
}