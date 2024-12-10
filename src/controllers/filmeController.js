import filme from "../models/Filme.js";
import {diretor} from "../models/Diretor.js";

class FilmeController { 

    static async listarFilmes (req, res) {
       try { 
           const listaFilmes = await filme.find({});
           res.status(200).json(listaFilmes);
       } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição` });
       }
    };


    static async listarFilmePorId (req, res) {
        try { 
            const id = req.params.id;
            const filmeEncontrado = await filme.findById(id);
            res.status(200).json(filmeEncontrado);
         
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha na requisição do filme.` });
        }
     };

     static async cadastrarFilme  (req, res) {
        const novoFilme =  req.body;
        try {
            const diretorEncontrado = await diretor.findById(novoFilme.diretor);
            const filmeCompleto = { ...novoFilme, diretor: { ...diretorEncontrado._doc } };
            res.status(201).json({ message: "Filme cadastrado com sucesso!", filme: novoFilme });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar filme.` });
        }
    }

    static async atualizarFilme (req, res) {
        try { 
            const id = req.params.id;
            await filme.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Filme atualizado com sucesso!" })
         
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha ao atualizar filme.` });
        }
     };

     static async excluirFilme (req, res) {
        try { 
            const id = req.params.id;
            await filme.findByIdAndDelete(id);
            res.status(200).json({ message: "Filme excluido com sucesso!" })
         
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha na exclusão do filme.` });
        }
        
        
     };
    };



export default FilmeController;