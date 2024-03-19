const { Editora : EditoraModel }= require("../model/editora");
const { EditoraService } = require("../services/editoraService");


const editoraController = {
    inserir: async(req, res) => {
        try{
            let editora = {
                id: req.body.id,
                nome:req.body.nome.trim(),
            }
            
            const resposta = await EditoraService.inserir(editora);
            res.status(201).json({resposta, msg: "Editora já adicionado com sucesso!"});

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

            const resposta = await EditoraService.listarTodos();
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
            const EditoraDeletada = await EditoraService.deletar(id);
            res.status(200).json({EditoraDeletada,msg:"Editora Deletada com sucesso!"})

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
            const Editora = await EditoraService.listar(id);
            res.status(200).json(Editora);

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

}

module.exports = editoraController;