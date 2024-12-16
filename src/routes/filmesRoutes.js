import express from "express";
import FilmeController from "../controllers/filmeController.js"; // Importe o controlador FilmeController

const routes = express.Router(); //Crie uma instância do roteador Express

// Definindo as rotas para as operações
routes.get("/filmes", FilmeController.listarFilmes); // Rota para listar todos os filmes
routes.get("/filmes/busca", FilmeController.listarFilmesPorProdutora); // Rota para listar filmes por produtora
routes.get("/filmes/:id", FilmeController.listarFilmePorId); // Rota para listar um filme por ID
routes.post("/filmes", FilmeController.cadastrarFilme); // Rota para cadastrar um novo filme
routes.put("/filmes/:id", FilmeController.atualizarFilme); // Rota para atualizar um filme por ID
routes.delete("/filmes/:id", FilmeController.excluirFilme); // Rota para excluir um filme por ID


export default routes;

