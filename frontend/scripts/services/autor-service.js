import AutorRepositorio from "../repository/autor-repositorio.js";

class AutorService{
    constructor(){
        this.repositorio = new AutorRepositorio();
    }
    validarEnvioAutor(){
        console.log("Enviado");
    }
}

export default AutorService;