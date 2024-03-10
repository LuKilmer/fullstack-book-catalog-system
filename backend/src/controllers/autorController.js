const { Autor : AutorModel }= require("../model/autor");
const { AutorService } = require("../services/autorService");



const autorController = {
    
    inserir: async(req, res) => {
        try{

            let autor = {
                primeiro_nome:req.body.primeiro_nome.trim(),
                segundo_nome:req.body.segundo_nome.trim()
            }
            
            AutorService.verificarInserir(autor);

            const resposta = await AutorModel.create(autor);

            res.status(201).json({resposta, msg: "Autor adicionado com sucesso!"});
        }catch(error){
            if(error.codigo==400){
                res.status(400).json({msg:error.message});

            }else{
                res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
            }
        }
    },

    listar: async(req, res) =>{
        try{
            const autor = await AutorModel.find();
            res.status(200).json(autor);
           
        }catch (error){
            res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
        }
    }



};

module.exports = autorController;