import express from "express";
    import bodyParser from "body-parser";
    import userRoute from "./Router/user.route.js";
    import NGO from "./Router/ngo.route.js";
    import mongoose from "mongoose";
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extends: true }));
    
    mongoose.connect("mongodb://localhost:27017/SamarpanDB")
        .then(() => {
            console.log("Database connected...");
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: true }));
    
            app.use("/user", userRoute);
            app.use("/NGO",NGO);
    
    
            app.listen(3000, () => {
                console.log("Server Started....");
            });
    
        }).catch(err => {
            console.log(err);
        })