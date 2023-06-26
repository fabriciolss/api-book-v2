import {authorModel} from "../model/AuthorModel.js";

export class AuthorController {
    static authorData = authorModel();

    static readInitialEndpoint = async (req, res) => {
        res.status(200).send('Welcome to api-book-v2. Considering previous version this API has implemented DATABASE with mongodb.')
    }

    static createAuthor = async (req, res, next) => {
        const reqBody = req.body;
        const newAuthor = new AuthorController.authorData(reqBody);
        await newAuthor.save()
            .then(suc => res.status(201).send('Successfully saved.'))
            .catch(err => next(err));
    }

    static createAuthors = async (req, res, next) => {
        const reqBody = req.body;
        const newAuthors = await AuthorController.authorData.insertMany(reqBody)
            .then(suc => res.status(201).send('Successfully saved.'))
            .catch(err => next(err));
    }

    static readAuthors = async (req, res) => {
        const authors = await AuthorController.authorData.find();
        res.status(200).json(authors)
    }

    static readAuthor = async (req, res,next) => {
        const paramsID = req.params.id;
        const author = await AuthorController.authorData.findById(paramsID)
            .then(suc => res.status(200).json(suc))
            .catch(err => next(err));
    }

    static updateAuthor = async (req, res, next) => {
        const paramsID = req.params.id;
        const author = await AuthorController.authorData.findByIdAndUpdate(paramsID, req.body)
            .then(suc => res.status(204).json(suc))
            .catch(err => next(err));
    }

    static deleteAuthor = async (req, res, next) => {
        const paramsID = req.params.id;
        const author = await AuthorController.authorData.findByIdAndDelete(paramsID)
            .then(suc => res.status(204).send('Resource deleted successfully.'))
            .catch(err => next(err));
    }

    static searchAuthor = async (req, res, next) => {
        AuthorController.authorData.find({name: req.query.name})
            .then(suc => res.status(200).json(suc))
            .catch(err => next(err));
    }
}