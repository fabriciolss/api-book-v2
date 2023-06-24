import mongoose from "mongoose";

export function bookModel(){
    const bookSchema = new mongoose.Schema({
        id: {type: String},
        title: {type: String, required: true},
        author: {type: String, required: true},
        year: {type: Number, required: true},
        pages: {type: Number}
    })

    return mongoose.model('books', bookSchema);
}