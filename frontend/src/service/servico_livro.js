import RepositorioLivro from "../repository/repositorio_livro.js";

class ServicoLivro{
    constructor(){
        this.repositorio = new RepositorioLivro();
    }
    
}

export default ServicoLivro;