import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const app = express();

// Função assíncrona para configurar a conexão e o servidor
async function startServer() {
  try {
    // Conectar ao banco de dados
    const conexao = await conectaNaDatabase();

    conexao.on('error', (erro) => {
      console.error('Erro de conexão:', erro);
    });

    conexao.once('open', () => {
      console.log('Conexão com o banco feita com sucesso');
    });

    // Configurar middleware
    app.use(express.json()); // Para parsear JSON no corpo das requisições

    // Configurar rotas
    routes(app);

    // Iniciar o servidor
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });

  } catch (erro) {
    console.error('Erro ao conectar ao banco de dados ou iniciar o servidor:', erro);
  }
}

// Chama a função para iniciar o servidor
startServer();

export default app;
