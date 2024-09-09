import express from 'express';
import routes from './src/routes/index.js'; // Ajuste o caminho se necessário
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerOptions.js'; // Ajuste o caminho se necessário

// Configura o Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
