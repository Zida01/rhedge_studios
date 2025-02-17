const notFoundHandler = (req, res, next) => {
  res.status(404).json({
      error: 'Not Found',
      message: `The requested resource ${req.originalUrl} was not found on this server.`,
  });
};


module.exports={notFoundHandler}