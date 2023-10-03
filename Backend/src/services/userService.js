const bcrypt = require("bcrypt");
const saltRounds = Number(process.env.SALT_ROUNDS);
const jwt = require("jsonwebtoken");

exports.encrptyPassword = async (password) => {
  return new Promise((myResolve, myReject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (hash) myResolve(hash);
      else myReject(err);
    });
  });
};

exports.verifyPassword = async (password, ogPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, ogPassword, function (err, result) {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

exports.generateToken = async (id, name, maxStorage) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(
      { userId: id, name: name, maxStorage: maxStorage },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" } // Set the token expiration to 3 days
    );

    if (token) {
      resolve(token);
    } else {
      reject(new Error("Token generation failed"));
    }
  });
};

exports.verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        reject(err); // Token verification failed
      } else {
        // Check if the token has expired
        const currentTimestamp = Math.floor(Date.now() / 1000); // Get current timestamp in seconds
        if (decoded.exp && decoded.exp < currentTimestamp) {
          reject(new Error("Token has expired")); // Token has expired
        } else {
          resolve(decoded); // Token is valid and not expired
        }
      }
    });
  });
};
