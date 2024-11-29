const mongoose = require('mongoose');

// Definindo o Schema de Aluno
const AlunoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  turma: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Turma',  // Relacionamento com o modelo 'Turma'
    required: true
  },
}, { timestamps: true });  // Adiciona createdAt e updatedAt

// Criando o modelo a partir do Schema
const Aluno = mongoose.model('Aluno', AlunoSchema);

module.exports = Aluno;
