import { connectDB } from "./db";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index";
import { CORS_ORIGIN, PORT } from "./config";
import middleware from "./middleware/verify.middleware";

const app = express();

console.log("Cors: ", CORS_ORIGIN)
const corsOptions = {
  origin: CORS_ORIGIN!,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();

app.get("/me", middleware, (req, res) => {
  res.status(200).json({
    message: "Authorized",
  });
  return;
});

app.use("/api", routes);

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${8000}`);
});
