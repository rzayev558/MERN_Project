const asyncHandler = require("express-async-handler");
//desc Register a new user
//@route /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, pwd } = req.body;

  //validation
  if (!name || !email || !pwd) {
    res.status(400);
    throw new Error("Include all fields");
  }

  res.send("Register Router");
});

//desc login a new user
//@route /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Router");
});

module.exports = {
  registerUser,
  loginUser,
};
