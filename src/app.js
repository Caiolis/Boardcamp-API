import { express, json } from "express";
import router from "./routes/index.routes.js";

//server Configs
const app = express();

dotev.config()
app.use(json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));