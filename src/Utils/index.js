const toLower = (str) => str.toLowerCase().split(" ").join("");

const isNOtDuplicated = (arr, input) => {
  return arr.filter((e) => input === e.name).length > 0 ? false : true;
};


export {
  toLower, 
  isNOtDuplicated
}