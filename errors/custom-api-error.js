class CustomAPIError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const createCustomAPIError = (message, status) => {
  return new CustomAPIError(message, status);
};

module.exports = createCustomAPIError;
