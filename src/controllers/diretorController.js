import { diretor } from "../models/Diretor.js"; // importa o diretor

class DiretorController { // cria uma classe DiretorController

    static async listarDiretores (req, res) { // cria um método estático que lista os diretores
       try { 
           const listaDiretores = await diretor.find({});
           res.status(200).json(listaDiretores);
       } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição` });
       }
    };


    static async listarDiretorPorId (req, res) {
        try { 
            const id = req.params.id;
            const diretorEncontrado = await diretor.findById(id);
            res.status(200).json(diretorEncontrado);
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha na requisição do diretor.` });
        }
     };

    static async cadastrarDiretor (req, res) {
        try {
            const novoDiretor = await diretor.create(req.body);
            res.status(201).json({ message: "Diretor cadastrado com sucesso!", filme: novoDiretor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar diretor.` });
        }
    }

    static async atualizarDiretor (req, res) {
        try { 
            const id = req.params.id;
            await diretor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Diretor atualizado com sucesso!" })
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha na atualização.` });
        }
     };

     static async excluirDiretor (req, res) {
        try { 
            const id = req.params.id;
            await diretor.findByIdAndDelete(id);
            res.status(200).json({ message: "Diretor excluido com sucesso!" });
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha na exclusão de diretor.` });
        }
     };
    };



export default DiretorController;