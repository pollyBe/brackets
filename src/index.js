module.exports = function check(str, bracketsConfig) {
  let length = str.length;
  let length1 = bracketsConfig.length;
  let arr = [];

  if (length % 2 !== 0) {
    return false;
  }
  if (length == 0) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length1; j++) {
      let conf = arr[arr.length - 1];

      if (
        str[i] == bracketsConfig[j][1] &&
        arr.length != 0 &&
        conf == bracketsConfig[j][0]
      ) {
        arr.pop();
      } else if (str[i] == bracketsConfig[j][0]) {
        arr.push(str[i]);
      }
    }
  }

  if (arr.length == 0) {
    return true;
  }
  if (arr.length != 0) {
    return false;
  }
};
