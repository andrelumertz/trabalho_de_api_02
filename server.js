import "dotenv/config"; // Importa o dotenv para carregar as variáveis de ambiente
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