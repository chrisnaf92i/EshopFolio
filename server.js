import express from "express";
import dotenv from "dotenv";
import Router from "./router.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const App = express();

App.use(express.json());

App.use(Router);

App.listen(PORT, console.log(`Lancement du server sur le port ${PORT}`));