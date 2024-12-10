
import "dotenv/config";
import app from "./src/app.js";


const PORT = 3000;

// const rotas = {
//   "/": "Curso de Express API",
//   "/filmes": "Entrei na rota filmes",
//   "/diretores": "Entrei na rota diretores",
// };


app.listen(PORT, () => {
  console.log("servidor escutando!");
});