const express = require("express");

const app = express();

// Serve arquivos da pasta "public"
app.use(express.static("public"));

// Porta dinâmica (Render) ou 3000 (local)
const porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta}`);
});
