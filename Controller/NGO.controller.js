import { validationResult } from "express-validator"
import { Ngo } from "../Model/NGO.model.js"

export const RegisterNGO = async (request, response, next) => {
    try {
        const error = validationResult(request);
        if (!error.isEmpty()) {
            return request.status(400).json({ message: "Bad request" });
        }
        const NGO = await Ngo.create(request.body);
        return response.status(201).json({ message: "Sign-up success", NGO });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error" });
    }
}