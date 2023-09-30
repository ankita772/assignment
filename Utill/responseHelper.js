exports.SUCCESS = (res, message, data) => {
  const payload = {
    status: 200,
    message: message,
    data: data,
  };
  return res.status(200).json(payload);
};

exports.ERROR = (res, message) => {
  const payload = {
    status: 400,
    message: message,
    data: null,
  };
  return res.status(400).json(payload);
};

exports.INTERNAL_SERVER_ERROR = (res) => {
  const payload = {
    status: 500,
    message: "internal server error",
  };
  return res.status(500).json(payload);
};
