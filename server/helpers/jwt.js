const jwt = require("jsonwebtoken");
const SECRETKEY = "secret";
const createToken = (payload) => {
  return jwt.sign(payload, SECRETKEY); // payload => bisa pakai id dan username (bentuknya obj)
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRETKEY);
};

module.exports = { createToken, verifyToken };
