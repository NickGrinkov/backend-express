import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://Nick:12345678Nick@cluster0.yreqnqo.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const { author, title, content, picture } = req.body
        const post = await Post.create({ author, title, content, picture })
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
    
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