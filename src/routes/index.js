import express from "express";
import filmes from "./filmesRoutes.js";
import diretores from "./diretoresRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Cineflix"));

    app.use(express.json(), filmes, diretores);

    };

    export default routes;