const mongoose = require(`mongoose`);

const connectedDB = async () => {
  const connecting = await mongoose.connect(process.env.MONGO_URL);

  console.log(
    `Mongo DB connected to URL: ${connecting.connection.host}`.bgYellow.bold
  );
};

module.exports = connectedDB;
