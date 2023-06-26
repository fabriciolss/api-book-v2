import mongoose from "mongoose";

export function authorModel(){
    const authorSchema = new mongoose.Schema({
        id: {type: String},
        name: {type: String, required: [true, "Name is required"]},
        country: {type: String, required: [true, "Country is required"]},
    })

    return mongoose.model('authors', authorSchema);
}