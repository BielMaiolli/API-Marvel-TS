import { Schema, model } from "mongoose";
import { timeStamp } from "console";

const personagemSchema = new Schema({
    idPersonagem: Number,
    namePersonagem: String,
    descriptionPersonagem: String,
    urlImagePersonagem: String
}, {
 timestamps: true
}
)

export default model('Personagem', personagemSchema)