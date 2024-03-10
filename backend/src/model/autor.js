const mongoose = require("mongoose");


const { Schema } = mongoose;

const autorSchema = new Schema({
    primeiro_nome: {
        type: String,
        required: true
    },
    segundo_nome: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});


const Autor = mongoose.model("Autor", autorSchema);

module.exports = {
    Autor,
    autorSchema
};
