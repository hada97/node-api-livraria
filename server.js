import express from 'express';
import routes from './src/routes/index.js'; // Ajuste o caminho se necessário
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerOptions.js'; // Ajuste o caminho se necessário

const app = express();
const port = 3000; // Ou a porta que você deseja usar

// Configura o Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Inicializa as rotas
routes(app);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
