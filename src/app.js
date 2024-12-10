import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
})

const app = express();
routes(app);


app.delete("/filmes/:id", (req, res) => {
  const index = buscaFilme(req.params.id);
  filmes.splice(index, 1);
  res.status(200).send("livro removido com sucesso");
});


export default app;

