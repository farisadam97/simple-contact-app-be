const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../Helper/ApiHelper");

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
      "seCreT2Key2",
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
