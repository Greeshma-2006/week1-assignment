import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserTypeModel } from "../Models/UserModel.js";

// REGISTER USER
export const register = async (userObj) => {
    // hash password
    userObj.password = await bcrypt.hash(userObj.password, 10);

    // create user
    const user = await UserTypeModel.create(userObj);

    // remove password before sending
    delete user._doc.password;

    return user;
};

//AUTHENTICATE USER
export const authenticate = async ({ email, password, role }) => {

    // find user by email & role
    const user = await UserTypeModel.findOne({ email, role });
    if (!user) {
        throw new Error("invalid credentials");
    }

    // compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("invalid credentials");
    }

    // check isActive state
    if (!user.isActive) {
        throw new Error("user is blocked");
    }

    // generate token
    const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    // remove password before returning
    delete user._doc.password;

    return { token, user };
};
