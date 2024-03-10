const { Autor : AutorModel }= require("../model/autor");

const autorController = {
    

    inserir: async(req, res) => {
        try{
            const autor = {

                primeiro_nome:req.body.primeiro_nome,
                segundo_nome:req.body.segundo_nome
            }

            const resposta = await AutorModel.create(autor);

            res.status(201).json({resposta, msg: "Autor adicionado com sucesso!"});

        }catch(error){
            console.log(error);
        }
    },

    listar: async(req, res) =>{
        try{
            const autor = await AutorModel.find();

            res.json(autor);
        }catch (error){
            console.log(error);
        }
    }



};

module.exports = autorController;