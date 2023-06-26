import {connectionMongo} from "./server/db.js";
import {BookController} from "./controller/BookController.js";
import express from 'express';
import {AuthorController} from "./controller/AuthorController.js";
import {Middlewares} from "./middlewares/middlewares-api.js";
const app = express();
const port = 3000;
connectionMongo();

app.use(express.json())

app.get('/', BookController.readInitialEndpoint);
app.get('/books/', BookController.readBooks);
app.get('/books/search', BookController.searchBook);
app.get('/books/:id', BookController.readBook);
app.post('/books/', BookController.createBook);
app.post('/books/', BookController.createBooks);
app.put('/books/:id', BookController.updateBook);
app.delete('/books/:id', BookController.deleteBook)

app.get('/authors/', AuthorController.readAuthors);
app.get('/authors/search', AuthorController.searchAuthor);
app.get('/authors/:id', AuthorController.readAuthor);
app.post('/authors/', AuthorController.createAuthor);
app.post('/authors/', AuthorController.createAuthors);
app.put('/authors/:id', AuthorController.updateAuthor);
app.delete('/authors/:id', AuthorController.deleteAuthor)

app.use(Middlewares.notFounded);
app.use(Middlewares.errorHandling);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})