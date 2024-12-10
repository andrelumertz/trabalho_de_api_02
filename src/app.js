import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase(); // conecta com o banco de dados


conexao.on("error", (erro) => { // caso de erro na conexão
console.error("erro de conexão", erro);
});

conexao.once("open", () => { // quando a conexão com o banco de dados é estabelecida
  console.log("conexão com o banco feita com sucesso");
})

const app = express();
routes(app); 


app.delete("/filmes/:id", (req, res) => {
  const index = buscaFilme(req.params.id); // busca o filme pelo id
  filmes.splice(index, 1); // remove o filme da posição index
  res.status(200).send("livro removido com sucesso");
});


export default app;