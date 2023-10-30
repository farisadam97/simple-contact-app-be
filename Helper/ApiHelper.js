const successResponse = async (res, status, message, data) => {
  return res.status(status).json({
    message,
    data: data,
  });
};

const errorResponse = async (res, statusCode, message) => {
  const splitMessage = message.replace(/\"/g, "").split(",");
  return res.status(statusCode).json({
    status: "error",
    splitMessage,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
