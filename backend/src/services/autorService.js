const { Autor : AutorModel }= require("../model/autor");
const { Erro } = require("../errors/error");

class AutorService{
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