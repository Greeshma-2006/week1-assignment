import express from 'express';
import { register } from '../Services/authService.js';
import { ArticleModel } from '../Models/ArticleModel.js';
import { checkAuthor } from '../Middleware/checkAuthor.js';

const authorRoute = express.Router();

//AUTHOR REGISTER – PUBLIC
authorRoute.post('/users', async (req, res) => {
    // register author (role set by server)
    const newAuthor = await register({ ...req.body, role: "AUTHOR" });

    res.status(201).json({
        message: "author registered",
        payload: newAuthor
    });
});
// CREATE ARTICLE – PROTECTED
authorRoute.post('/articles/:authorId', checkAuthor, async (req, res) => {
    // build article data
    const article = {
        ...req.body,
        author: req.params.authorId
    };

    // save article
    const newArticle = await ArticleModel.create(article);

    res.status(201).json({
        message: "article created",
        article: newArticle
    });
});

// READ ALL ARTICLES OF AUTHOR – PUBLIC
authorRoute.get('/articles/:authorId', async (req, res) => {
    const articles = await ArticleModel.find({
        author: req.params.authorId
    });

    res.status(200).json({
        message: "articles found",
        articles
    });
});

// READ ONLY ACTIVE ARTICLES – PUBLIC
authorRoute.get('/articles/active/:authorId', async (req, res) => {
    const articles = await ArticleModel.find({
        author: req.params.authorId,
        isArticleActive: true
    });

    res.status(200).json({
        message: "active articles found",
        articles
    });
});

// EDIT ARTICLE – PROTECTED
authorRoute.put('/articles/:articleId/:authorId', checkAuthor, async (req, res) => {
    const updatedArticle = await ArticleModel.findByIdAndUpdate(
        req.params.articleId,
        req.body,
        { new: true }
    );

    res.status(200).json({
        message: "article updated",
        article: updatedArticle
    });
});

// DELETE ARTICLE (SOFT DELETE) – PROTECTED
authorRoute.delete('/articles/:articleId/:authorId', checkAuthor, async (req, res) => {
    const deletedArticle = await ArticleModel.findByIdAndUpdate(
        req.params.articleId,
        { isArticleActive: false },
        { new: true }
    );

    res.status(200).json({
        message: "article deleted",
        article: deletedArticle
    });
});

export default authorRoute;
