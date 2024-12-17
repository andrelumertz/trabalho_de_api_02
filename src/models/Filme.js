import mongoose from "mongoose";
import { diretorSchema } from "./Diretor.js";

const filmeSchema = new mongoose.Schema({ // cria o schema do filme com os campos titulo, produtora, ano e diretor
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    produtora: { type: String },
    ano: { type: Number },
    // diretor: diretorSchema // Relacionamento com o modelo Diretor, no mongoose se faz assim
  }, { versionKey: false }); // do Mongoose para versão no mongoDB

  const filme = mongoose.model("filmes", filmeSchema); // cria o modelo do filme com o nome filmes

  export default filme;