import mongoose from "mongoose";
import { diretorSchema } from "./Diretor.js";

const filmeSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    produtora: { type: String },
    ano: { type: Number },
    diretor: diretorSchema // Relacionamento com o modelo Diretor, no mongoose se faz assim
  }, { versionKey: false });

  const filme = mongoose.model("filmes", filmeSchema);

  export default filme;