import filme from "../models/Filme.js";
import { diretor } from "../models/Diretor.js";

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

     static async cadastrarFilme (req, res) {
        // const novoFilme = req.body;
        // try {
        //     const autorEncontrado = await autor.findById(novoLivro.autor);
        //     const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
        //     const livroCriado = await livro.create(livroCompleto);
        //     res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
        //   } catch (erro) {
        //     res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        //   }
        try {
            
            const novoFilme = await filme.create(req.body);
            res.status(201).json({ message: "Filme cadastrado com sucesso!" })

        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha ao cadastrar filme.` });
        }
     }

    static async atualizarFilme (req, res) {
        try { 
            const id = req.params.id;
            await filme.findByIdAndUpdate(id, req.body); // Atualiza o filme com base no ID fornecido, no moongose é dessa forma o findByIdAndUpdate para ser utilizado.
            res.status(200).json({ message: "Filme atualizado com sucesso!" })
         
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha ao atualizar filme.` });
        }
     };

     static async excluirFilme (req, res) {
        try { 
            const id = req.params.id;
            await filme.findByIdAndDelete(id); //metodo para deletar um filme pelo id com mongoose 
            res.status(200).json({ message: "Filme excluido com sucesso!" })
         
        } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha na exclusão do filme.` });
        }
     };

     static async listarFilmesPorProdutora (req, res) {
       const produtora = req.query.produtora;
       try {
        const filmesPorProdutora = await filme.find({ produtora: produtora });
           res.status(200).json(filmesPorProdutora);
       } catch (erro) {
           res.status(500).json({ message: `${erro.message} - falha na busca do filme por produtora.` });
       }
    }
};



    export default FilmeController;