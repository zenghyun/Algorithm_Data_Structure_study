/**
 * 바탕화면 정리
    https://school.programmers.co.kr/learn/courses/30/lessons/161990
 */


// ver 1
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

// ver 2 
function solution(wallpaper) {
    var left = [];
    var top = [];
    var right = [];
    var bottom = [];

    wallpaper.forEach((v,idx) => {
      [...v].forEach((file, index) => {
        if(file === "#") {
          left.push(idx);
          top.push(index);
          right.push(idx+1);
          bottom.push(index+1);
        }
      } )
    })
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)];
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
  