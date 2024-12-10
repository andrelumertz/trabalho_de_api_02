import mongoose, { mongo } from "mongoose"; // importa o mongoose
import dotenv from 'dotenv'; // importa o dotenv
dotenv.config(); // carrega as variáveis de ambiente


async function conectaNaDatabase() { // cria uma função que conecta com o banco de dados
    console.log(process.env.DB_CONNECTION_STRING);
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.s6v0c.mongodb.net/cineflix01?retryWrites=true&w=majority&appName=Cluster0');
    return mongoose.connection; // retorna a conexão com o banco de dados
};

export default conectaNaDatabase;