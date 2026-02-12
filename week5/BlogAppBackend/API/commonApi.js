import bcrypt from 'bcryptjs';
import { UserTypeModel } from '../Models/UserModel.js';
import exp from 'express';
import { authenticate, register } from "../Services/authService.js";

const commonRouter = exp.Router();

//AUTHENTICATE (LOGIN)
commonRouter.post('/authenticate', async (req, res) => {
    // get login credentials
    const userCredObj = req.body;

    // authenticate user
    const result = await authenticate(userCredObj);

    // store token in cookie
    res.cookie('token', result.token, {
        httpOnly: true,
        secure: false,      // true in production
        sameSite: 'lax',
        maxAge: 60 * 60 * 1000 // 1 hour
    });

    // send response
    res.status(200).json({
        message: "login success",
        user: result.user
    });
});

// LOGOUT
commonRouter.post('/logout', (req, res) => {
    // clear token cookie
    res.clearCookie('token', {
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    });

    // send response
    res.status(200).json({ message: "logout success" });
});

// change password
commonRouter.put('/change-password/:userId', async (req, res) => {
    const { currentPassword, newPassword } = req.body;

    const user = await UserTypeModel.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "user not found" });

    const ok = await bcrypt.compare(currentPassword, user.password);
    if (!ok) return res.status(401).json({ message: "wrong current password" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "password changed" });
});


export default commonRouter;
