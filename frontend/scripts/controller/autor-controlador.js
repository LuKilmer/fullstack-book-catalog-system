import Autor from "../model/autor.js";
import AutorService from "../services/autor-service.js";


class AutorControlador{
    
    constructor(){
        this.autorService = new AutorService();
        this.autor_botao = document.getElementById("autores-botao");
        this.autor_botao.addEventListener("click",this.openModalAutor);
        this.autor_botao_fechar = document.getElementById("modal-autor-fechar");
        this.autor_botao_fechar.addEventListener("click",this.closeModalAutor);
        this.autor_botao_enviar = document.getElementById("botao-enviar-autor");
        this.autor_botao_enviar.addEventListener("click",this.enviarAutor.bind(this));
    }
    enviarAutor(){
        this.autorService.validarEnvioAutor();
    }
    openModalAutor(){
        document.getElementById("modal-autor").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }
    closeModalAutor(){
        document.getElementById("modal-autor").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }

}

export default AutorControlador;