import Editora from "../model/ediotra.js";
import Livro from "../model/livro.js";

class Controller{
    #editoras_url;
    #editoras_list;
    #book_list;
    constructor(){
        this.#editoras_url = "http://localhost:3000/editoras/";
        this.#editoras_list = [];
        this.#book_list = [];
    }
    teste(){
        let livro1 = new Livro(1,"Amor e Liberdade", 1968,["Romance","Drama"]);
        let livro2 = new Livro(2,"Arte da Guerra", 1988,["Filosofia"]);
        let livro3 = new Livro(3,"Noite na Cabana", 2005,["Terror", "Suspense"]);
        let livro4 = new Livro(4,"Ciência da Computação I", 1960,["Ciência","Tecnologia"]);
        let livro5 = new Livro(5,"Matemática Aplicada", 1970,["Ciência","Tecnologia"]);
        this.book_list = [livro1,livro2,livro3,livro4,livro5];

        this.book_list.forEach(elemet => {elemet.showData()});
    }
    createNode(){
        const body = document.body;
        const entrada = document.getElementById("entrada");
        if(entrada.value.length > 8){
            const auxiliar = document.createElement("li");
            auxiliar.innerHTML =entrada.value;
            entrada.value = "";
            const currentOl = document.getElementById("lista");
            currentOl.appendChild(auxiliar);
        }else{
            entrada.value = "";
            console.log("negado");
        }
    }

    

    getEditoras(){
        fetch(this.#editoras_url)
        .then( elements => elements.json())
        .then( elements => 
            elements.forEach(element =>{
                let editora = new Editora(
                    element.id,
                    element.nome,
                    element.descricao,
                    element.imagem,
                    element.avaliacao
                );
                this.#editoras_list.push(editora);
            })
        )
        .then(console.log("ok")
        )
        .catch(

        )
        .finally(
            console.log("okk")
        );
    }

}

export default Controller;