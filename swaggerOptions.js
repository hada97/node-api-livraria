// swaggerOptions.js
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Documentação da minha API',
    },
  },
  apis: ['./routes/*.js'], // Ajuste o caminho conforme a estrutura do seu projeto
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
