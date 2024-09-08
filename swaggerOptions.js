
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express'; // Certifique-se de importar o express

const app = express(); // Inicialize o express

// Configurações do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Documentação da minha API',
    },
  },
  apis: ['./src/routes/*.js'], // Ajuste o caminho conforme a estrutura do seu projeto
};

const swaggerSpec = swaggerJsdoc(options);


// Exporta o swaggerSpec se precisar usá-lo em outro lugar
export default swaggerSpec;
