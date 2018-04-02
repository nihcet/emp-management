module.exports = (err, req, res, next) => {
  const message = process.env.NODE_ENV === 'development' ? err.message : null;
  const status = err.status || 500;
  res.status(status).json(message);
};
