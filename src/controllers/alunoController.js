// controllers/alunoController.js
const Aluno = require('../model/Aluno');

// Listar todos os alunos
const getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find().populate('turma');
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alunos.' });
  }
};

// Criar aluno
const createAluno = async (req, res) => {
  try {
    const novoAluno = new Aluno(req.body);
    await novoAluno.save();
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar aluno.' });
  }
};

// Atualizar aluno
const updateAluno = async (req, res) => {
  try {
    const alunoAtualizado = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!alunoAtualizado) {
      return res.status(404).json({ error: 'Aluno não encontrado.' });
    }
    res.json(alunoAtualizado);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar aluno.' });
  }
};

// Excluir aluno
const deleteAluno = async (req, res) => {
  try {
    const alunoRemovido = await Aluno.findByIdAndDelete(req.params.id);
    if (!alunoRemovido) {
      return res.status(404).json({ error: 'Aluno não encontrado.' });
    }
    res.json({ message: 'Aluno removido com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir aluno.' });
  }
};

module.exports = { getAlunos, createAluno, updateAluno, deleteAluno };
