const mongoose = require("mongoose");


const { Schema } = mongoose;

const autorSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique : true
    },
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
