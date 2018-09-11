/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counterOfSpichonees = preferences.length;
  let counterOfLoveTriangles = 0;

  if (counterOfSpichonees < 3) {
    return 0;
  }

  for (let i = 0; i < counterOfSpichonees; i++) {
    let second = preferences[i] - 1;

    if (second != i) {
      let third = preferences[second] - 1;

      if (preferences[third] - 1 == i) {
        counterOfLoveTriangles++;
        preferences[i] = -1;
        preferences[second] = -1;
        preferences[third] = -1;
      }
    }
  }

  return counterOfLoveTriangles;
};
