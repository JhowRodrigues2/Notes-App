//mongodb+srv://jhowrdev:<password>@cluster0.fsc6rfp.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");
const dbConfig =
  "mongodb+srv://jhowrdev:jhowkill1@cluster0.fsc6rfp.mongodb.net/?retryWrites=true&w=majority";
const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
