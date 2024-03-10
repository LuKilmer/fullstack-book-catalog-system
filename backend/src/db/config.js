const mongoose = require("mongoose");

async function main(){
    try{
        await mongoose.connect(
            "mongodb://localhost:27017/library-system"
        ).then(() => {
            console.log("Databse Connected Successfully!!");    
        }).catch(err => {
            console.log('Could not connect to the database', err);
            process.exit();
        });
    }catch(error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;