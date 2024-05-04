import { Schema, model } from "mongoose";
import { timeStamp } from "console";

const criadoresSchema = new Schema({
    idCriadores: Number,
    nameCriadores: String,
    professionCriadores: String
}, {
    timestamps: true
})

export default model('Criadores', criadoresSchema)