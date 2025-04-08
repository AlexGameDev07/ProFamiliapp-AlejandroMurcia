import mongoose from "mongoose";

import { config } from "./src/config.js";

mongoose.connect(config.db.URI);

const connection = mongoose.connection;

connection.once("open", () => { console.log("MongoDB database connection established successfully :D") });

connection.on("disconnected", () => { console.log("MongoDB connection disconnected") });

connection.on("error", (err) => { console.log("MongoDB connection error: ", err) });