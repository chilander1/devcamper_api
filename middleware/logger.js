// @desc        Logs request to console

const logger = (req, res, next) => {
  console.log(req.originalUrl);
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  next();
};

module.exports = logger;
