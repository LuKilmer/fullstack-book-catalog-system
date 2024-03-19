const { Editora : EditoraModel} = require("../model/editora");
const { Erro } = require("../errors/error");

class EditoraService{
    static async verificarIdDisponivel(id){
        const editora = await EditoraModel.findOne({ id: id });
        return editora;
    }

    static async inserir(editora){
        if(!(await this.verificarIdDisponivel(editora.id))){
            this.verificarInserir(editora);
            const resposta = await EditoraModel.create(editora);
            return resposta;
        }else{
            throw new Erro('ID já existente', 400);
        };
    }

    static async listarTodos(){
        const editoras = await EditoraModel.find();
        if(editoras.length > 0){
            return editoras;
        }else{
            throw new Erro('Conteudo não entrado', 404);
        }
    }

    static async listar(id){
        const editora = await this.verificarIdDisponivel(id);
        if(editora){
            return editora;
        }else{
            throw new Erro('Não existe o ID informado', 404);
        };
    }

    static async deletar(id){
        const editoraDeletado = await this.verificarIdDisponivel(id);
        if(editoraDeletado){
            const resposta = await EditoraModel.findByIdAndDelete(editoraDeletado._id);
            return resposta;
        }else{
            throw new Erro('Não existe o ID informado', 404);
        };
    }

    static verificarInserir(editora){
        if(editora.nome.length <= 1){
            throw new Erro('O nome não possui um tamanho satisfatório ou está vazio', 400);
        }
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;

        if(!regex.test(editora.nome)){
            throw new Erro('O nome possui caracteres inválidos', 400);
        }

    }

}

module.exports = {EditoraService};