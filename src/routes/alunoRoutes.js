// routes/AlunoRoutes.js
const express = require('express');
const router = express.Router();
const { getAlunos, createAluno, updateAluno, deleteAluno } = require('../controllers/alunoController');

// Definindo as rotas de alunos
router.get('/', getAlunos);  // Listar todos os alunos
router.post('/', createAluno); // Criar novo aluno
router.put('/:id', updateAluno); // Atualizar aluno
router.delete('/:id', deleteAluno); // Excluir aluno

module.exports = router;
