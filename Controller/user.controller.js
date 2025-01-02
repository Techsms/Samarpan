import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { Users } from "../Model/user.model.js";

export const signUp = async (request, response, next) => {
    try {
        // Validate request
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ error: "Bad request", details: errors.array() });
        }

        // Encrypt the password
        const saltKey = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(request.body.password, saltKey);
        request.body.password = encryptedPassword;

        // Create user
        const user = await Users.create(request.body);
        return response.status(201).json({ message: "Sign up success", user });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const signIn = async (request, response, next) => {
    try {
        let { email, password } = request.body;
        let user = await Users.findOne({ email });
        if (user) {
            let status = bcrypt.compareSync(password, user.password);
            return status ? response.status(200).json({ message: "Sign in success..", user }) : response.status(401).json({ error: "Bad request | invalid password" })
        }
        else
            return response.status(401).json({ error: "Bad request | invalid email id" });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}