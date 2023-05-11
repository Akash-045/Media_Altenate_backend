import Express from "express";
import cors from "cors";

import contentRouter from "./routes/content";
import apiErrorHandler from "./middleware/apiErrorHandeler";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/contents", contentRouter);

app.use(apiErrorHandler);

export default app;