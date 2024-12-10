import express from "express";
import DiretorController from "../controllers/diretorController.js";

const routes = express.Router();

routes.get("/diretores", DiretorController.listarDiretores);
routes.get("/diretores/:id", DiretorController.listarDiretorPorId);
routes.post("/diretores", DiretorController.cadastrarDiretor);
routes.put("/diretores/:id", DiretorController.atualizarDiretor);
routes.delete("/diretores/:id", DiretorController.excluirDiretor);

export default routes;

