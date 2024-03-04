if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const jwt = require("jsonwebtoken");

const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};
const verifyToken = (payload) => {
  return jwt.verify(payload, process.env.JWT_SECRET);
};



module.exports = {
  verifyToken,
  signToken
};
