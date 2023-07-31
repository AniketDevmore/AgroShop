const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const { errMiddleware } = require("./middleware/middleware");

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use(errMiddleware);
module.exports = app;
