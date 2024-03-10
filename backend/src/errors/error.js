class Erro extends Error {
    constructor(message, codigo) {
        super(message);
        this.codigo = codigo;
    }
}

module.exports = {Erro};