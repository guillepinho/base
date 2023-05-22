const throwError = (cause) => {
  throw new Error(cause, { cause });
};

module.exports = throwError;