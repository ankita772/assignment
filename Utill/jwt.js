const jwt = require("jsonwebtoken");
const { ERROR } = require("./responseHelper");

exports.tokenGenarator = (payload) => {
  const token = jwt.sign(
    { user_email: payload.userEmail, user_password: payload.userPassword },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );
  return token;
};

exports.verifyToken = (req, res, next) => {
  const bearerToken = req.header("Authorization");
  if (!bearerToken) return ERROR(res, "Invalid token!");
  const token = bearerToken.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err) => {
    if (err) {
      return ERROR(res, "Invalid token!");
    }
    next();
  });
};
