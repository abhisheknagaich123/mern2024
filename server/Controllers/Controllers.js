const User = require("../models/user-model");
 const bcrypt = require("bcryptjs");


const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------------
//* User Registration Logic 📝
// *-------------------------------

const register = async (req, res) => {
  try {
    // const data = req.body;
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({ username, email, phone, password });

    // res.status(201).json({ message: "User registered successfully" });


    res.status(201).json({
      msg: `Registartion successfully`,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });


  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// *-------------------------------
//* User Login Logic 📝
// // *-------------------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //const isPasswordValid = await userExist.comparePassword(password);

    //const isPasswordValid = await userExist.comparePassword(password);
     //const user = await bcrypt.compare(password, userExist.password);
     const user = await userExist.comparePassword(password);
    if (user) {
       return res.status(200).json({
        message: "Login Successful"
       
      });
    } else {
      return res.status(401).json({ message: "Invalid email or passord " });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



module.exports = { home, register, login };