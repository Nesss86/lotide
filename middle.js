const middle = function(array) {
  if (array.length <=2) {
  return [];
}
  const midIndex = Math.floor(array.length / 2);
  if (array.length % 2 ===0) {
    return [array[midIndex - 1], array[midIndex]];
  } else {
    return [array[midIndex]];
  }
}; 

module.exports = middle;

