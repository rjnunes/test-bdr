const apiPort = 5000;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const alunoRouter = require('./routes/aluno.router');
const cursoRouter = require('./routes/curso.router');
const db = require('./db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1', alunoRouter)
app.use('/api/v1', cursoRouter)

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(apiPort, () => console.log(`Listening on port ${apiPort}`));