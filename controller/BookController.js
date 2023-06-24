import {bookModel} from "../model/BookModel.js";

export class BookController {
    static booksData = bookModel();

    static readInitialEndpoint = async (req, res) => {
        res.status(200).send('Welcome to api-book-v2. Considering previous version this API has implemented DATABASE with mongodb.')
    }

    static createBook = async (req, res) => {
        const reqBody = req.body;
        const newBook = new BookController.booksData(reqBody);
        await newBook.save()
            .then(suc => res.status(201).send('Successfully saved.'))
            .catch(err => res.status(500).send(`Error: ${err.message}`))
    }

    static createBooks = async (req, res) => {
        const reqBody = req.body;
        const newBooks = await BookController.booksData.insertMany(reqBody)
            .then(suc => res.status(201).send('Successfully saved.'))
            .catch(err => res.status(500).send(`Error: ${err.message}`));
    }
    
    static readBooks = async (req, res) => {
        const books = await BookController.booksData.find();
        res.status(200).json(books)
    }

    static readBook = async (req, res) => {
        const paramsID = req.params.id;
        const book = await BookController.booksData.findById(paramsID)
            .then(suc => res.status(200).json(suc))
            .catch(err => res.status(500).send(`Error:${err.message}`));
    }

    static updateBook = async(req,res) => {
        const paramsID = req.params.id;
        const book = await BookController.booksData.findByIdAndUpdate(paramsID, req.body)
            .then(suc => res.status(204).json(suc))
            .catch(err => res.status(500).send(`Error: ${err.message}`));
    }

    static deleteBook = async(req, res) =>{
        const paramsID = req.params.id;
        const book = await BookController.booksData.findByIdAndDelete(paramsID)
            .then(suc => res.status(204).send('Resource deleted successfully.'))
            .catch(err => res.status(500).send(`Error: ${err.message}`));
    }
}