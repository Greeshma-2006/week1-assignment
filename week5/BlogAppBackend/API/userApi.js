import exp from "express";
import { register } from "../Services/authService.js";
import { ArticleModel } from "../Models/ArticleModel.js";
import { UserTypeModel } from "../Models/UserModel.js";

const userRoute = exp.Router();

// REGISTER USER
userRoute.post("/users", async (req, res) => {
    // get user data
    const userObj = req.body;

    // register user
    const newUser = await register({ ...userObj, role: "USER" });

    // send response
    res.status(201).json({
        message: "user created",
        payload: newUser
    });
});

// READ ALL ARTICLES
userRoute.get("/articles/:userId", async (req, res) => {
    // check user
    const user = await UserTypeModel.findById(req.params.userId);
    if (!user) {
        return res.status(401).json({ message: "invalid user" });
    }

    // fetch articles
    const articles = await ArticleModel.find({ isArticleActive: true });

    res.status(200).json({
        message: "all articles",
        payload: articles
    });
});

// ADD COMMENT
userRoute.put("/articles/:articleId/comments/:userId", async (req, res) => {
    const { articleId, userId } = req.params;

    const user = await UserTypeModel.findById(userId);
    if (!user) return res.status(401).json({ message: "invalid user" });

    const article = await ArticleModel.findById(articleId);
    if (!article) return res.status(404).json({ message: "article not found" });

    article.comments.push({
        user: userId,
        comment: req.body.comment
    });

    await article.save();

    res.status(201).json({
        message: "comment added",
        payload: article
    });
});

export default userRoute;
