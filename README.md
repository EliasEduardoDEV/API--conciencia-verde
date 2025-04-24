# api-conciencia-verde

#  Consciência Verde API

Uma API utilitária com foco na educação ambiental e na conscientização ecológica. Desenvolvida para fornecer frases motivacionais, dicas sustentáveis, dados sobre a floresta Amazônica e sugestões de leitura sobre o meio ambiente.

---

##  Funcionalidades

### 1. **GET /frases**
Retorna uma frase aleatória de conscientização ambiental.

**Exemplo de resposta:**
```json
{
  "frase": "Preservar o meio ambiente é preservar a vida."
}
```

---

### 2. **GET /amazonia**
Retorna dados (fictícios) sobre a devastacão da floresta Amazônica.

**Exemplo de resposta:**
```json
{
  "ano": 2024,
  "hectaresDesmatados": 103456,
  "fonte": "INPE (dado fictício)"
}
```

---

### 3. **GET /dicas**
Retorna uma dica aleatória de atitude sustentável no dia a dia.

**Exemplo de resposta:**
```json
{
  "dica": "Leve sua própria sacola reutilizável ao supermercado."
}
```

---

### 4. **GET /livros**
Sugere livros sobre sustentabilidade e meio ambiente.

**Exemplo de resposta:**
```json
{
  "livros": [
    "Primavera Silenciosa - Rachel Carson",
    "A vida secreta das árvores - Peter Wohlleben",
    "Como evitar um desastre climático - Bill Gates"
  ]
}
```

