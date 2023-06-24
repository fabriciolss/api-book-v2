import {connectionMongo} from "./server/db.js";
import {BookController} from "./controller/BookController.js";
import express from 'express';
import {AuthorController} from "./controller/AuthorController.js";
const app = express();
const port = 3000;
app.use(express.json())
connectionMongo();

app.get('/', BookController.readInitialEndpoint);
app.get('/books/', BookController.readBooks);
app.get('/books/:id', BookController.readBook);
app.post('/book/', BookController.createBook);
app.post('/books/', BookController.createBooks);
app.put('/books/:id', BookController.updateBook);
app.delete('/books/:id', BookController.deleteBook)

app.get('/authors/', AuthorController.readAuthors);
app.get('/authors/:id', AuthorController.readAuthor);
app.post('/author/', AuthorController.createAuthor);
app.post('/authors/', AuthorController.createAuthors);
app.put('/authors/:id', AuthorController.updateAuthor);
app.delete('/authors/:id', AuthorController.deleteAuthor)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})