import express from "express"; // importa o express
import filmes from "./filmesRoutes.js"; // importa o filmesRoutes
import diretores from "./diretoresRoutes.js"; // importa o diretoresRoutes

const routes = (app) => { // cria uma função que recebe o app como parâmetro
    app.route("/").get((req, res) => res.status(200).send("Cineflix")); // cria uma rota que retorna "Cineflix"

    app.use(express.json(), filmes, diretores); // cria uma rota que recebe um json e as rotas filmes e diretores

    };

    export default routes; // exporta a função routes