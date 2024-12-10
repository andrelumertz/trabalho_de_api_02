import mongoose from "mongoose";

const diretorSchema = new mongoose.Schema({ // cria o schema do diretor com os campos nome e nacionalidade 
        id: {type: mongoose.Schema.Types.ObjectId}, // cria o campo id do tipo ObjectId
        nome: {type: String, required: true}, // cria o campo nome do tipo String e é obrigatório
        nacionalidade: {type: String} // cria o campo nacionalidade do tipo String
    },
    {
        versionKey: false 
    }
);

const diretor = mongoose.model("diretores", diretorSchema); // cria o modelo do diretor com o nome diretores

export { diretor, diretorSchema }; // exporta o modelo do diretor e o schema do diretor