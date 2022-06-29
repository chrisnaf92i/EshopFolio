import express from "express";
import dotenv from "dotenv";
import Router from "./router.js";
import mongoose from "mongoose";
dotenv.config();

const PORT = process.env.PORT || 8000;

const App = express();

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(() => console.log("Connexion à Mongodb réussie !"))
    .catch(() => console.log("Connexion à Mongodb échouée !"))

App.use(express.json());

App.use(Router);

App.listen(PORT, console.log(`Lancement du server sur le port ${PORT}`));