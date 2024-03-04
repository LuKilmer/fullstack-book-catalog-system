class Livro {
  constructor(id ,nome, ano, capa,  categoria, autor, editora) {
    this.id = id;
    this.nome = nome;
    this.ano = ano;
    this.capa = capa;
    this.categoria = categoria;
    this.autor = autor;
    this.editora = editora;
  }

  showData(){

    let resposta = "Nome: " + this.nome + "\nAno: " + this.ano + "\nCategorias:\n";
    if (Array.isArray(this.categoria)) {
      this.categoria.forEach(element => {
        resposta+="- "+element+"\n";
      });
    } else {
      resposta+="- "+this.categoria+"\n";
    }
      console.log(resposta);
  }
}

export default Livro;
