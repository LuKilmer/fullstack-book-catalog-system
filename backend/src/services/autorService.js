const { Autor : AutorModel }= require("../model/autor");
const { Erro } = require("../errors/error");

class AutorService{
    static async verificarIdDisponivel(id){
        const autor = await AutorModel.findOne({ id: id });
        return autor;
    }

    static async inserir(autor){
        if(!(await this.verificarIdDisponivel(autor.id))){
            this.verificarInserir(autor);
            const resposta = await AutorModel.create(autor);
            return resposta;
        }else{
            throw new Erro('ID já existente', 400);
        };
        
    }

    static async listarTodos(){
        const autores = await AutorModel.find();
        if(autores.length > 0){
            return autores;
        }else{
            throw new Erro('Conteudo não entrado', 404);
        }

    }


    static async listar(id){
        const autor = await this.verificarIdDisponivel(id);
        if(autor){
            return autor;
        }else{
            throw new Erro('Não existe o ID informado', 400);
        };
    }



    static async deletar(id){
        const AutorDeletado = await this.verificarIdDisponivel(id);
        if(AutorDeletado){
            const resposta = await AutorModel.findByIdAndDelete(AutorDeletado._id);
            return resposta;
        }else{
            throw new Erro('Não existe o ID informado', 400);
        };
    }
    

    static verificarInserir(autor){
        if(autor.primeiro_nome.length <= 1){
            throw new Erro('Primeiro nome não possui um tamanho satisfatório ou está vazio', 400);
        }
        if(autor.segundo_nome.length <= 1){
            throw new Erro('Segundo nome não possui um tamanho satisfatório ou está vazio', 400);
        }
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;

        if(!regex.test(autor.primeiro_nome)){
            throw new Erro('Primeiro nome possui caracteres inválidos', 400);
        }

        if(!regex.test(autor.segundo_nome)){
            throw new Erro('Segundo nome possui caracteres inválidos', 400);
        }
    }
}

module.exports = {AutorService};