import Editora from "../model/editora.js";
import Livro from "../model/livro.js";
import Autor from "../model/autor.js";

class Controller{
    #editoras_url;
    #livro_url;
    #autores_url;

    #editoras_lista;
    #livros_lista;
    #autores_lista

    constructor(){
        this.#editoras_url = "http://localhost:3000/editoras/";
        this.#livro_url= "http://localhost:3000/livros/";
        this.#autores_url = "http://localhost:3000/autores/";
        this.#editoras_lista = [];
        this.#livros_lista = [];
        this.#autores_lista =[];
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
    getNomeAutorPorID(id){


        let autor = this.#autores_lista[id-1];
        if(autor==undefined){
            return "Não encontrado";
        }else{
            return autor.nome;
        }
    }

    getNomeEditoraPorID(id){
        let editora = this.#editoras_lista[id-1];
        if(editora==undefined){
            return "Não encontrado";
        }else{
            return editora.nome;
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
                this.#editoras_lista.push(editora);
            })
        )
        .catch(error => {
            throw(error);
            }
        )
        .finally(
            console.log("editoras lidos")
        );
    }
    showLivroData(){
        this.#livros_lista.forEach(livro=>{
                    
            let resposta = "Nome: "+livro.nome+"| ano: "+livro.ano+"\nCategorias:\n";
            livro.categoria.forEach(element => {
                resposta+="- "+element+"\n";
              })
            resposta+="Autor: "+this.getNomeAutorPorID(livro.autor)+"\nEditora: "+this.getNomeEditoraPorID(livro.editora)+"\n"
            console.log(resposta)
        }
        )
    }

    getLivros(){
        fetch(this.#livro_url)
        .then( elements => elements.json())
        .then( elements => 
            elements.forEach(element =>{
                let livro = new Livro(
                    element.id,
                    element.nome,
                    element.ano,
                    element.capa,
                    element.categorias,
                    element.autor,
                    element.editora
                )
                this.#livros_lista.push(livro);
                }
            )
        )
        .then(()=>{
                this.showLivroData();
            }
        )
        .catch(error => {
            throw(error);
            }
        )
        .finally(
            console.log("livros lidos")
        );
    }

    getAutores(){
        fetch(this.#autores_url)
        .then( elements => elements.json())
        .then( elements => 
            elements.forEach(element =>{
                let autor = new Autor(
                    element.id,
                    element.nome,
                    element.perfil    
                );
                this.#autores_lista.push(autor);
               
            })
        )
        .then(console.log("ok")
        )
        .catch(error => {
            throw(error);
            }
        )
        .finally(
            console.log("autores lido")
        );
    }

}

export default Controller;