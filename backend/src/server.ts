import express from "express";
import helmet from "helmet";
import cors from "cors";
import tmdAPI from "./tmdAPI";

const app = express();
app.use(helmet());
app.use(cors());

const PORT = 31000;

app.use("/", tmdAPI);

app.listen(PORT, () => console.log(`server started at ${PORT}`));
