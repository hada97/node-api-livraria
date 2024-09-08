import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();


/**
 * @openapi
 * /autores:
 *   get:
 *     summary: Retorna todos os autores
 *     description: Obtém uma lista de todos os autores disponíveis na API.
 *     responses:
 *       200:
 *         description: Lista de autores
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
 *                     description: Identificador único do autor
 *                   nome:
 *                     type: string
 *                     description: Nome do autor
 *                   nacionalidade:
 *                     type: string
 *                     description: Nacionalidade do autor
 */
routes.get("/autores", AutorController.listarAutores);


/**
 * @openapi
 * /autores/{id}:
 *   get:
 *     summary: Retorna um autor específico
 *     description: Obtém os detalhes de um autor específico usando seu ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do autor
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Detalhes do autor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 nome:
 *                   type: string
 *                 nacionalidade:
 *                   type: string
 */
routes.get("/autores/:id", AutorController.listarAutorPorId);

/**
 * @openapi
 * /autores:
 *   post:
 *     summary: Adiciona um novo autor
 *     description: Adiciona um autor à lista de autores.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do autor
 *               nacionalidade:
 *                 type: string
 *                 description: Nacionalidade do autor
 *     responses:
 *       201:
 *         description: Autor adicionado com sucesso
 */
routes.post("/autores", AutorController.cadastrarAutor);

/**
 * @openapi
 * /autores/{id}:
 *   put:
 *     summary: Atualiza um autor específico
 *     description: Atualiza os detalhes de um autor existente usando seu ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do autor
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
 *               nome:
 *                 type: string
 *               nacionalidade:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autor atualizado com sucesso
 */
routes.put("/autores/:id", AutorController.atualizarAutor);


/**
 * @openapi
 * /autores/{id}:
 *   delete:
 *     summary: Remove um autor específico
 *     description: Remove um autor da lista usando seu ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do autor
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Autor removido com sucesso
 */
routes.delete("/autores/:id", AutorController.excluirAutor);

export default routes;
