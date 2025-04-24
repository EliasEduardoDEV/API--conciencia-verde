// api-consciencia-verde/index.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Frases de conscientização
const frases = [
  "Preservar o meio ambiente é preservar a vida.",
  "Recicle hoje para um amanhã melhor.",
  "Cada pequena ação conta para um planeta mais limpo.",
  "Plante uma árvore, colha um futuro."
];

// Dicas ecológicas
const dicas = [
  "Leve sua própria sacola reutilizável ao supermercado.",
  "Desligue aparelhos da tomada quando não estiver usando.",
  "Reaproveite a água da chuva para regar plantas.",
  "Separe o lixo reciclável do orgânico."
];

// Livros sobre meio ambiente
const livros = [
  "Primavera Silenciosa - Rachel Carson",
  "A vida secreta das árvores - Peter Wohlleben",
  "Como evitar um desastre climático - Bill Gates",
  "Meio Ambiente e Sustentabilidade - José Eli da Veiga"
];

// Rota: Frases motivacionais ecológicas
app.get("/frases", (req, res) => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  res.json({ frase });
});

// Rota: Dados sobre a Amazônia
app.get("/amazonia", (req, res) => {
  res.json({
    ano: 2024,
    hectaresDesmatados: 103456,
    fonte: "INPE (dado fictício)"
  });
});

// Rota: Dicas ecológicas
app.get("/dicas", (req, res) => {
  const dica = dicas[Math.floor(Math.random() * dicas.length)];
  res.json({ dica });
});

// Rota: Livros recomendados
app.get("/livros", (req, res) => {
  res.json({ livros });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
