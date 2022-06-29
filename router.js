import express from "express";
import { login, signIn } from "./controller/auth.js";

const Router = express.Router();

Router.get("/", (req, res) => {
    res.json({"message": "bienvenu sur l'api de MyEshopFolio"});
});


Router.get("/sign-in", signIn);
Router.get("/login", login);

export default Router;