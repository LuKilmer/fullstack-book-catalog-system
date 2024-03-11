const { Autor : AutorModel }= require("../model/autor");
const { AutorService } = require("../services/autorService");



const autorController = {
    
    inserir: async(req, res) => {
        try{
            let autor = {
                id: req.body.id,
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

    listarAll: async(req, res) =>{
        try{
            const autor = await AutorModel.find();
            res.status(200).json(autor);
           
        }catch (error){
            res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
        }
    },

    deletar: async(req, res) => {
        try{
            const id = req.params.id;
            const autor = await AutorModel.findOne({ id: id });
            
            if(!autor){
                res.status(404).json({msg:"Objeto não encontrado..."})
                return;
            };
            const AutorDeletado = await AutorModel.findByIdAndDelete(autor._id);
            console.log(AutorDeletado._id);
            res.status(200).json({AutorDeletado,msg:"Autor Deletado com sucesso!"})
        }catch (error){
            res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
        }
    },

    listar: async(req, res) =>{
        try{
           
            const id = Number(req.params.id);
            const autor = await AutorModel.findOne({ id: id });
          
            if(!autor){
                res.status(404).json({msg:"Objeto não encontrado..."})
            }else{
                res.status(200).json(autor);
            }

        }catch (error){
            res.status(500).json({msg:"Erro Interno no Servidor...",detalhes:error.message});
        }
    }



};

module.exports = autorController;