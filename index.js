const express = require("express");
const dotenv = require("dotenv");
const connectedDB = require("./config/db");
const colors = require("colors");
const cors = require(`cors`);
const morgan = require(`morgan`);

//set color
colors.enable();
// run env
dotenv.config();

//connected DB
connectedDB();

//APP installation
const app = express();

//data file

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NOD_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/motors", require("./routes/motor.route"));
app.use("/api/v1/caravan", require("./routes/caravan.route"));
app.use("/api/v1/tuning", require("./routes/tuning.route"));
app.use("/api/v1/usedCar", require("./routes/useCar.route"));
app.use("/api/v1/auth", require("./routes/auth.route"));
//State PORT
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`.bgGreen.bold);
});
