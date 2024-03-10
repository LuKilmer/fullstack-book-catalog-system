const mongoose = require("mongoose");

const { Schema } = mongoose;

const editoraSchema = new Schema({
    id_editora: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});
editoraSchema.plugin(autoIncrement.plugin, {
    model: "Editora",  
    field: "id_editora", 
    startAt: 1, 
    incrementBy: 1 
});

const Editora = mongoose.model("Editora", editoraSchema);

module.exports = {
    Editora,
    editoraSchema
};
