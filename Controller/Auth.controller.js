const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../Helper/ApiHelper");
const { jwtSecret } = require("../Config");
const loginAccount = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username !== "admin" && password !== "password") {
      successResponse(res, 400, "Username/password doesn't match!");
    }

    const token = jwt.sign(
      {
        username: username,
      },
      jwtSecret,
      {
        expiresIn: "15min",
      }
    );
    successResponse(res, 200, "Login success", {
      username: username,
      token: token,
    });
  } catch (error) {
    errorResponse(res, 400, error.message);
  }
};
module.exports = {
  loginAccount,
};
