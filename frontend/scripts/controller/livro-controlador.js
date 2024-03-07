
class LivroControlador{
    
    constructor(){
        this.livro_botao = document.getElementById("livros-botao");
        this.livro_botao.addEventListener("click",this.openModalLivro);
        this.livro_botao_fechar = document.getElementById("modal-livro-fechar");
        this.livro_botao_fechar.addEventListener("click",this.closeModalLivro);
    }
    openModalLivro(){
        document.getElementById("modal-livro").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }
    closeModalLivro(){
        document.getElementById("modal-livro").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }

}

export default LivroControlador;