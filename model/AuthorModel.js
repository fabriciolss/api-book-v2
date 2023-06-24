import mongoose from "mongoose";

export function authorModel(){
    const authorSchema = new mongoose.Schema({
        id: {type: String},
        name: {type: String, required: true},
        country: {type: String, required: true},
    })

    return mongoose.model('authors', authorSchema);
}