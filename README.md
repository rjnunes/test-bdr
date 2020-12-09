# test-bdr
## Esse projeto tem como objetivo abordar as tecnologias Node.js e React.

## **PRÉ-REQUISITOS**
Node 14.15.1

## **CONFIGURANDO O AMBIENTE**
1. Para iniciá-lo, primeiramente clone o projeto para sua área local execute no Terminal o comando: 
``git clone https://github.com/rjnunes/test-bdr``

2. Entre na pasta raiz do projeto, executar o comando: ``npm install``

3. Em seguida execute os comandos ``cd client`` e ``npm install``

4. Volte para a raiz do projeto e entre no arquivo ``db/index.js`` e altere as configurações de banco de dados nas constantes: ``usuario``, ``senha``, ``banco`` e ``servidor``

5. Em seguida para executar a aplicação abra o terminal e a partir da raiz do projeto execute o comando ``npm run dev``

## **PORTAS DO SISTEMA**
### **API**: 5000
### **Frontend**: 3000


## **MÉTODOS DA API**

### **Alunos**
GET /api/v1/alunos \
GET /api/v1/alunos/:id \
POST /api/v1/alunos \
PUT /api/v1/alunos/:id \
DELETE /api/v1/alunos/:id \
  
### **Cursos**
GET /api/v1/cursos \
GET /api/v1/cursos/:id \
POST /api/v1/cursos \
PUT /api/v1/cursos/:id \
DELETE /api/v1/cursos/:id 