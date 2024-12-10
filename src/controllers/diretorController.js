import { diretor } from "../models/Diretor.js";

class DiretorController { 

    static async listarDiretores (req, res) {
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
         res.status(500).json({ message: `${erro.message} - falha na requisição do filme.` });
        }
     };

    static async cadastrarDiretor (req, res) {
        try {
            const novoDiretor = await diretor.create(req.body);
            res.status(201).json({ message: "Filme cadastrado com sucesso!", diretor: novoDiretor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar filme.` });
        }
    }

    static async atualizarDiretor (req, res) {
        try { 
            const id = req.params.id;
            await diretor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Diretor atualizado com sucesso!" })
         
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha ao atualizar filme.` });
        }
     };

     static async excluirDiretor (req, res) {
        try { 
            const id = req.params.id;
            await diretor.findByIdAndDelete(id);
            res.status(200).json({ message: "Diretor excluido com sucesso!" })
         
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha na exclusão do filme.` });
        }
        
        
     };
    };



export default DiretorController;