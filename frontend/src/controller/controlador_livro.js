import ServicoLivro from "../service/servico_livro.js";

class ControladorLivro{
    constructor(){
        this.servico = new ServicoLivro();
    }
}

export default ControladorLivro;