const mongoose = require("mongoose");
//service mongod start
async function main(){
    try{
        await mongoose.connect(
            "mongodb://localhost:27017/library-system"
        ).then(() => {
            console.log("Banco de Dados conectado com sucesso!!");    
        }).catch(err => {
            console.log('Não foi possível conectar ao Banco de Dados', err);
            process.exit();
        });
    }catch(error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;