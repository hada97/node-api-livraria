import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();


/**
 * @openapi
 * /livros:
 *   get:
 *     summary: Retorna todos os livros
 *     description: Obtém uma lista de todos os livros disponíveis na API.
 *     responses:
 *       200:
 *         description: Lista de livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                     description: Identificador único do livro
 *                   titulo:
 *                     type: string
 *                     description: Título do livro
 *                   editora:
 *                     type: string
 *                     description: Editora do livro
 *                   preco:
 *                     type: number
 *                     format: float
 *                     description: Preço do livro
 *                   paginas:
 *                     type: integer
 *                     description: Número de páginas do livro
 */
routes.get("/livros", LivroController.listarLivros);


/**
 * @openapi
 * /livros/{id}:
 *   get:
 *     summary: Retorna um livro específico
 *     description: Obtém os detalhes de um livro específico usando seu ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Detalhes do livro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 titulo:
 *                   type: string
 *                 editora:
 *                   type: string
 *                 preco:
 *                   type: number
 *                   format: float
 *                 paginas:
 *                   type: integer
 */
routes.get("/livros/:id", LivroController.listarLivroPorId);


/**
 * @openapi
 * /livros:
 *   post:
 *     summary: Adiciona um novo livro
 *     description: Adiciona um livro à lista de livros.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título do livro
 *               editora:
 *                 type: string
 *                 description: Editora do livro
 *               preco:
 *                 type: number
 *                 format: float
 *                 description: Preço do livro
 *               paginas:
 *                 type: integer
 *                 description: Número de páginas do livro
 *     responses:
 *       201:
 *         description: Livro adicionado com sucesso
 */
routes.post("/livros", LivroController.cadastrarLivro);


/**
 * @openapi
 * /livros/{id}:
 *   put:
 *     summary: Atualiza um livro específico
 *     description: Atualiza os detalhes de um livro existente usando seu ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               editora:
 *                 type: string
 *               preco:
 *                 type: number
 *                 format: float
 *               paginas:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 */
routes.put("/livros/:id", LivroController.atualizarLivro);


/**
 * @openapi
 * /livros/{id}:
 *   delete:
 *     summary: Remove um livro específico
 *     description: Remove um livro da lista usando seu ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Livro removido com sucesso
 */
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;
