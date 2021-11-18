const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: 'token is not valid',
        });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).send({
      success: false,
      message: 'auth token is not supplied',
    });
  }
};
