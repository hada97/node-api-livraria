
import swaggerJsdoc from 'swagger-jsdoc';
import express from 'express'; // Certifique-se de importar o express

const app = express(); // Inicialize o express

// Configurações do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    externalDocs: {
      description: 'GitHub',
      url: 'https://github.com/hada97/nodeapi',
    },
    info: {
      title: 'API Rest em Node.js',
      version: '1.0.0',
      description: 'Banco de dados Mongo BD Atlas\n\nDeploy da aplicacao no Azure\n\nAplicação empacotada com Docker\n\n',
    },
  
  },
  apis: ['./src/routes/*.js'], // Ajuste o caminho conforme a estrutura do seu projeto
};

const swaggerSpec = swaggerJsdoc(options);


// Exporta o swaggerSpec se precisar usá-lo em outro lugar
export default swaggerSpec;
