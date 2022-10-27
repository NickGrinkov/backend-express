import Post from './Post.js';

class PostController {
    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body
            const post = await Post.create({ author, title, content, picture })
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            if(!id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const post = await Post.findById(id);
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            const post = req.body;
            if(!post._id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            if(!id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const post = await Post.findByIdAndDelete(id);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new PostController();