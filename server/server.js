const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./database/connection");

const app = express();


dotenv.config({ path: "config.env" });
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan("tiny"));

connectDB();

//Middleware
// viewengine setup
app.set("view engine", "ejs");

//static folder root setup
// app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routing
app.use("/", require("./routes/router"));

app.listen(PORT, () => {
  console.log(`The App is running on http://localhost:${PORT}`);
});
