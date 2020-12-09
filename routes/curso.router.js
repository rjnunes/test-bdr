const express = require('express');
const CursoCtrl = require('../controllers/curso.ctrl');
const router = express.Router();

router.get('/cursos', CursoCtrl.getCursos);
router.post('/cursos', CursoCtrl.createCurso);
router.get('/cursos/:id', CursoCtrl.getCursoById);
router.put('/cursos/:id', CursoCtrl.updateCurso);
router.delete('/cursos/:id', CursoCtrl.deleteCurso);

module.exports = router