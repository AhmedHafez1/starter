const controllerWrapper = (fn) => {
  return async (req, res) => {
    try {
      await fn(req, res);
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
};

module.exports = controllerWrapper;
