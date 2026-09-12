import 'dotenv/config'; // Lê o arquivo .env logo no início
import express from 'express';
import authRoutes from './src/routes/authRoutes.js';
import consultaRoutes from './src/routes/consultaRoutes.js';

const app = express();

// Middleware para interpretar requisições em formato JSON
app.use(express.json());

// Rotas de Autenticação (POST /auth/register e POST /auth/login)
app.use('/auth', authRoutes);

// Rotas de Consultas (Protegidas por JWT e RBAC)
app.use('/consultas', consultaRoutes);

// Porta configurada via variável de ambiente ou fallback para 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});