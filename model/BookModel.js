import mongoose from "mongoose";

export function bookModel(){
    const bookSchema = new mongoose.Schema({
        id: {type: String},
        title: {type: String, required: [true, "Title is required"]},
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: [true, "Author is required"]},
        year: {type: Number, required: [true, "Year is required"]},
        pages: {type: Number}
    })

    return mongoose.model('books', bookSchema);
}