const { Autor : AutorModel }= require("../model/autor");
const  {AutorService } = require("../services/autorService");

const autorController = {

    inserir: async(req, res) => {
        try{
            let autor = {
                id: req.body.id,
                primeiro_nome:req.body.primeiro_nome.trim(),
                segundo_nome:req.body.segundo_nome.trim()
            }
            const resposta = await AutorService.inserir(autor);
            res.status(201).json({resposta, msg: "Autor adicionado com sucesso!"});

        }catch(error){

            if(error.codigo==400){
                res.status(400).json({msg:error.message});
            }else{
                res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
            }
        }
    },

    listarTodos: async(req, res) =>{
        try{

            const resposta = await AutorService.listarTodos();
            res.status(200).json(resposta);
           
        }catch (error){

            if(error.codigo==404){
                res.status(404).json({msg:error.message});

            }else{
                res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
            }
        }
    },

    deletar: async(req, res) => {
        try{
            
            const id = Number(req.params.id);
            const AutorDeletado = await AutorService.deletar(id);
            res.status(200).json({AutorDeletado,msg:"Autor Deletado com sucesso!"})

        }catch (error){
            if(error.codigo==404){
                res.status(404).json({msg:error.message});

            }else{
                res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
            }
        }
    },

    listar: async(req, res) =>{
        try{
           
            const id = Number(req.params.id);
            const autor = await AutorService.listar(id);
            res.status(200).json(autor);

        }catch (error){
            if(error.codigo==404){
                res.status(404).json({msg:error.message});

            }else{
                res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
            }
        }
    },


    atualizar: async(req, res) =>{
        try{
            
            res.status(200).json({msg: "Atualizado com sucesso"});
        }catch (error){
            res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
        }
    }
};

module.exports = autorController;
