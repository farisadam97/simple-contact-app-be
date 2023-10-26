const successResponse = async (res, status, data) => {
  return res.status(status).json({
    status: "success",
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
