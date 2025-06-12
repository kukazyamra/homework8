module.exports = function validateIdParam(req, res, next) {
  const id = Number(req.params.id);

  if (!req.params.id || isNaN(id) || id <= 0 || !Number.isInteger(id)) {
    return res.status(400).json({
      error: "Invalid ID",
    });
  }
  next();
};
