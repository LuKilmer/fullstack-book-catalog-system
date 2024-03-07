

class EditoraControlador{
    
    constructor(){
        this.editora_botao = document.getElementById("editoras-botao");
        this.editora_botao.addEventListener("click",this.openModalEditora);
        this.editora_botao_fechar = document.getElementById("modal-editora-fechar");
        this.editora_botao_fechar.addEventListener("click",this.closeModalEditora);
    }

    openModalEditora(){
        document.getElementById("modal-editora").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }
    closeModalEditora(){
        document.getElementById("modal-editora").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }

}

export default EditoraControlador;