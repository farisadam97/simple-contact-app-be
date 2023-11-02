const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../Helper/ApiHelper");
const { jwtSecret } = require("../Config");
const loginAccount = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username !== "admin" || password !== "password") {
      throw new Error("Username or password does not match");
    }

    const token = jwt.sign(
      {
        username: username,
      },
      jwtSecret,
      {
        expiresIn: "12h",
      }
    );
    successResponse(res, 200, "Login success", {
      username: username,
      token: token,
    });
  } catch (error) {
    errorResponse(res, 401, error.message);
  }
};
module.exports = {
  loginAccount,
};
