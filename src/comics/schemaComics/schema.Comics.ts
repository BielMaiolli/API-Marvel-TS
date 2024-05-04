import { Schema, model } from "mongoose";
import { timeStamp } from "console";

const comicsSchema = new Schema ({
    titleComics: String,
    descriptionComics: String,
    capaComics: String,
    idComics: Number,
    publicationDateComics: Date
}, {
    timestamps: true
})

export default model('Comics', comicsSchema)