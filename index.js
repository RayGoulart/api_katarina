// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

// Importando as rotas de alunos
const alunoRoutes = require('./src/routes/alunoRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para ler o corpo das requisições em JSON

// Conectar ao banco de dados
connectDB();

// Rotas
app.use('/api/alunos', alunoRoutes); // Usando as rotas de alunos

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

