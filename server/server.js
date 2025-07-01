import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import bodyParser from "body-parser";

connectDB()

const app = express()
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())

// Ajoute ce bloc AVANT express.json() pour le webhook Clerk
app.post("/api/clerk", bodyParser.raw({ type: "*/*" }), clerkWebhooks);

app.get('/', (req, res) => res.send("API is working fine!"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));