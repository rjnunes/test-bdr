const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 5000;

const alunoRouter = require('./routes/aluno.router');
const db = require('./db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1', alunoRouter)

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// app.get('/api/v1/cursos', (req, res) => {
//     res.send({ response: 'GET /api/v1/cursos' });
// });
// app.post('/api/v1/cursos', (req, res) => {
//     res.send({ response: 'POST /api/v1/cursos' });
// });
// app.put('/api/v1/cursos/:idCurso', (req, res) => {
//     res.send({ response: 'PUT /api/v1/cursos/:idCurso' });
// });
// app.delete('/api/v1/cursos/:idCurso', (req, res) => {
//     res.send({ response: 'DELETE /api/v1/cursos/:idCurso' });
// });

// app.get('/api/v1/matriculas', (req, res) => {
//     res.send({ response: 'GET /api/v1/matriculas' });
// });
// app.post('/api/v1/matriculas', (req, res) => {
//     res.send({ response: 'POST /api/v1/matriculas' });
// });
// app.put('/api/v1/matriculas/:idMatricula', (req, res) => {
//     res.send({ response: 'PUT /api/v1/matriculas/:idMatricula' });
// });
// app.delete('/api/v1/matriculas/:idMatricula', (req, res) => {
//     res.send({ response: 'DELETE /api/v1/matriculas/:idMatricula' });
// });

app.listen(apiPort, () => console.log(`Listening on port ${apiPort}`));