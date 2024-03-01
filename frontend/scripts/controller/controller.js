import Livro from "../model/livro.js";

class Controller{
    constructor(){
        this.book_list = []
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
}

export default Controller;