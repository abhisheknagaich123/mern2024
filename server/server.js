
const express = require("express");
const app = express();
const router = require("./router/auth-route");
const connectDb = require("./utils/db")
const errorMiddleware = require("./middleware/erroe-middleware");
const contactRoute = require("./router/contact-route");




app.use(errorMiddleware);


app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactRoute);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});