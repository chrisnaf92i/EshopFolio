import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const App = express();

App.listen(PORT, console.log(`Lancement du server sur le port ${PORT}`));