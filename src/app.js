import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import setRoutes from "./config/routes.js";

const app = express();
const port = 5000;

// middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("combined"));
connectDB();
setRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
