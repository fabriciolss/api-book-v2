import {connectionMongo} from "./server/db.js";
import {BookController} from "./controller/BookController.js";
import express from 'express';
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


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})