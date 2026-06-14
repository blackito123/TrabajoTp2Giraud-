import jwt from "jsonwebtoken";
const generateToken = (id, role) => {
  const secret = process.env.JWT_SECRET || "default_secret";
  return jwt.sign({ id, role }, secret, {
    expiresIn: "30d"
  });
};
export {
  generateToken
};
