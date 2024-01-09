const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin_panel";

const URI="mongodb+srv://abhishek3102002:Vff7lGIYTPOW311W@cluster0.zo9u2cm.mongodb.net/mern_admin_panel?retryWrites=true&w=majority";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;