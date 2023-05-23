const insertLS = (keyName, cookie) => window.localStorage.setItem(keyName, cookie);

const readLS = (keyName) => window.localStorage.getItem(keyName);

const clear = () => window.localStorage.clear();

const utils = {
  insertLS,
  readLS,
  clear,
};

export default utils;
