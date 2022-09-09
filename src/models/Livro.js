//schema do banco (modelo de como é o documento guardado no banco)

import mongoose from "mongoose";


const livrosSchema = new mongoose.Schema(
    {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', required: true},//para fazer referencia a outro schema
    editora: {type: String, required: true},
    numeropaginas: {type: Number}
    }
)

const livros = mongoose.model('livros', livrosSchema);

export default livros;