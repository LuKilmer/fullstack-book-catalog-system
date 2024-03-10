const mongoose = require("mongoose");
const { autorSchema } = require("./autor");
const { editoraSchema } = require("./editora"); 
const { Schema } = mongoose;

const livroSchema = new Schema({
    id_livro: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    total_pagina: {
        type: Number,
        required: true
    },
    nota: {
        type: Number,
        required: true
    },
    data_publicacao: {
        type: Date,
        required: true
    },
    autor:{
        type:[autorSchema],
        required:true
    },
    editora:{
        type:[editoraSchema],
        required:true
    }
},
{
    timestamps: true
});

livroSchema.plugin(autoIncrement.plugin, {
    model: "Livro",  
    field: "id_livro", 
    startAt: 1, 
    incrementBy: 1 
});

const Livro = mongoose.model("Livro", livroSchema);

module.exports = Livro;
