const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, "seCreT2Key2");
    req.username = decoded.username;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({ error: "Unauthorized" });
  }
}

module.exports = auth;
