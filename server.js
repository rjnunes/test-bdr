const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/v1/cursos', (req, res) => {
    res.send({ response: 'GET /api/v1/cursos' });
});
app.post('/api/v1/cursos', (req, res) => {
    res.send({ response: 'POST /api/v1/cursos' });
});
app.put('/api/v1/cursos/:idCurso', (req, res) => {
    res.send({ response: 'PUT /api/v1/cursos/:idCurso' });
});
app.delete('/api/v1/cursos/:idCurso', (req, res) => {
    res.send({ response: 'DELETE /api/v1/cursos/:idCurso' });
});

app.get('/api/v1/alunos', (req, res) => {
    res.send({ response: 'GET /api/v1/alunos' });
});
app.post('/api/v1/alunos', (req, res) => {
    res.send({ response: 'POST /api/v1/alunos' });
});
app.put('/api/v1/alunos/:idAluno', (req, res) => {
    res.send({ response: 'PUT /api/v1/alunos/:idAluno' });
});
app.delete('/api/v1/alunos/:idAluno', (req, res) => {
    res.send({ response: 'DELETE /api/v1/alunos/:idAluno' });
});

app.get('/api/v1/matriculas', (req, res) => {
    res.send({ response: 'GET /api/v1/matriculas' });
});
app.post('/api/v1/matriculas', (req, res) => {
    res.send({ response: 'POST /api/v1/matriculas' });
});
app.put('/api/v1/matriculas/:idMatricula', (req, res) => {
    res.send({ response: 'PUT /api/v1/matriculas/:idMatricula' });
});
app.delete('/api/v1/matriculas/:idMatricula', (req, res) => {
    res.send({ response: 'DELETE /api/v1/matriculas/:idMatricula' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));