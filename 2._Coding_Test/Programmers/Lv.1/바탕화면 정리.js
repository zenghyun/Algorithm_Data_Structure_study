/**
 * 바탕화면 정리
    https://school.programmers.co.kr/learn/courses/30/lessons/161990
 */

function solution(wallpaper) {
  var answer = Array.from(
    { length: wallpaper.length },
    (_, idx) => new Array(...wallpaper[idx])
  );
  var path = [];

  for (var idx in answer) {
    answer[idx].forEach((file) => {
      if (file.indexOf("#") !== -1) {
        path.push([
          Number(idx),
          answer[idx].indexOf(file),
          Number(idx) + 1,
          answer[idx].indexOf(file) + 1,
        ]);
        answer[idx][answer[idx].indexOf(file)] = ".";
      }
    });
  }

  var values = [];
  console.log(path);
  for (var col = 0; col < path[0].length; col++) {
    var columnValues = path.map((row) => row[col]);
    if (col < 2) {
      var minValue = Math.min(...columnValues);
      values.push(minValue);
    } else {
      var maxValue = Math.max(...columnValues);
      values.push(maxValue);
    }
  }

  return values;
}

// console.log(solution([".#...", "..#..", "...#."])) // [0, 1, 3, 4]
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
); // [1, 3, 5, 8]
// console.log(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])) // [0, 0, 7, 9]
// console.log(solution(["..", "#."])) // [1, 0, 2, 1]
