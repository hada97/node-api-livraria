import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';

const routes = (app) => {
  // Middleware para parsear JSON
  app.use(express.json());

  // Rota básica
  app.route('/').get((req, res) => res.status(200).send('Curso de Node.js'));

  // Configuração das rotas
  app.use('/livros', livros);
  app.use('/autores', autores);
};

export default routes;
