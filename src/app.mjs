import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// import all the routes
import routes from "./routes/index.mjs";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// routes middleware
app.use("/api", routes);

export default app;

// super admin credentials
// username: super_admin
// password: $jetsyet34_
