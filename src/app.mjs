import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// Allow requests from your frontend
const corsOptions = {
  origin: "https://paindocafrica.com", // Your frontend origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers)
  optionsSuccessStatus: 204,
};

// import all the routes
import routes from "./routes/index.mjs";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());

// routes middleware
app.use("/api", routes);

export default app;

// super admin credentials
// username: super_admin
// password: $jetsyet34_

// admin credentials
// username: admin
// password: !_retyd435
