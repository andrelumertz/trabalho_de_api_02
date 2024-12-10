import express from "express";
import DiretorController from "../controllers/diretorController.js"; // Importe o controlador DiretorController
const routes = express.Router(); // Crie uma instância do roteador Express

routes.get("/diretores", DiretorController.listarDiretores); // Rota para listar todos os diretores
routes.get("/diretores/:id", DiretorController.listarDiretorPorId); // Rota para listar um diretor por ID
routes.post("/diretores", DiretorController.cadastrarDiretor); // Rota para cadastrar um novo diretor
routes.put("/diretores/:id", DiretorController.atualizarDiretor); // Rota para atualizar um diretor por ID
routes.delete("/diretores/:id", DiretorController.excluirDiretor); // Rota para excluir um diretor por ID

export default routes;

