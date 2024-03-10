class RepositorioLivro{
    constructor(){
        this.livros = [];
    }
    adicionar(livro){
        this.livros.push(livro);
        return livro;
    }

    remover(matricula){
        const index= this.livros.findIndex(livro => livro.matricula === matricula);
        if(index>=0){
            const livro = this.livros[index];
            this.livros.slice(index,1);
            return livro;
        }
        return undefined;
    }

    buscarPorNome(nome) {
        return this.livros.filter(livro => livros.nome === nome);
    }

    buscarPorMatricula(matricula) {
        return this.livros.filter(livro => livros.matricula === matricula);
    }
}

export default RepositorioLivro;