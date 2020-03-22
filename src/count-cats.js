module.exports = function countCats(matrix) {
  let arrayWithCats = matrix.reduce((result, current) => result.concat(current), []);
  let result = arrayWithCats.filter((item) => item === '^^');
  return result.length;
};
