require("dotenv").config();
const connect = require("./db/mongodb");
const app = require("./app");
const port = process.env.PORT;
const url = process.env.url;

app.listen(port, (err) => {
  if (!err) {
    console.log("Server connected to port, ", port);
  } else {
    console.log(err);
  }
});

connect(url)
  .then((data) => {
    console.log("Database is conected!");
  })
  .catch((err) => {
    console.log(err);
  });
