import express from "express";
import FilmeController from "../controllers/filmeController.js";

const routes = express.Router();

routes.get("/filmes", FilmeController.listarFilmes);
routes.get("/filmes/:id", FilmeController.listarFilmePorId);
routes.post("/filmes", FilmeController.cadastrarFilme);
routes.put("/filmes/:id", FilmeController.atualizarFilme);
routes.delete("/filmes/:id", FilmeController.excluirFilme);

export default routes;

