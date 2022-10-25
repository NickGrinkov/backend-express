import express from 'express';
import mongoose from 'mongoose';

const PORT = 5000;
const DB_URL = `mongodb+srv://Nick:12345678Nick@cluster0.yreqnqo.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Сервер работает')
})

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

startApp();