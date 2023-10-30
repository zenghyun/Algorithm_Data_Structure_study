/**
 * 공원 산책 
 * https://school.programmers.co.kr/learn/courses/30/lessons/172928
 */

function solution(park, routes) {
    const maxRow = park.length - 1;
    const maxCol = park[0].length - 1;
    let row = park.findIndex((s) => s.includes("S"));
    let col = park[row].indexOf("S");
  
    routes.forEach((position) => {
      const [d, n] = position.split(" ");
  
      let tempRow = row;
      let tempCol = col;
      let flag = true;
  
      for (let i = 0; i < Number(n); i++) {
        switch (d) {
          case "E":
             tempCol++;
             break;
          case "W":
             tempCol--;
             break;
          case "S":
             tempRow++;
             break;
          case "N":
             tempRow--;
             break;
        }
  
        if (
          tempRow > maxRow ||
          tempRow < 0 ||
          tempCol > maxCol ||
          tempCol < 0 ||
          park[tempRow][tempCol] === "X"
        ) {
          flag = false;
          break;
        }
      }
  
        if (flag) {
          console.log(tempCol);
          col = tempCol;
          row = tempRow;
        }
    });
    return [row, col];
  }
  
  