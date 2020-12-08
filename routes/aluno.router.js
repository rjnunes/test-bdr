const express = require('express');
const AlunoCtrl = require('../controllers/aluno.ctrl');
const router = express.Router();

router.get('/alunos', AlunoCtrl.getAlunos);
router.post('/alunos', AlunoCtrl.createAluno);
router.get('/alunos/:id', AlunoCtrl.getAlunoById);
router.put('/alunos/:id', AlunoCtrl.updateAluno);
router.delete('/alunos/:id', AlunoCtrl.deleteAluno);

module.exports = router