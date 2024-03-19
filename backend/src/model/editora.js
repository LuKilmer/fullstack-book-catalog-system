const mongoose = require("mongoose");

const { Schema } = mongoose;

const editoraSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique : true
    },
    nome: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Editora = mongoose.model("Editora", editoraSchema);

module.exports = {
    Editora,
    editoraSchema
};
