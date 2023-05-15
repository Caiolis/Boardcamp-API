import { express, json } from "express";
import router from "./routes/index.routes.js";

//server Configs
const app = express();
PORT = 5000;

app.use(json());
app.use(router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));