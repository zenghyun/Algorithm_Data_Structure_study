/**
 * 달리기 경주
 * https://school.programmers.co.kr/learn/courses/30/lessons/178871
 */

function solution(players, callings) {
    const playerIndexMap = {};
  
    players.forEach((player, index) => {
      playerIndexMap[player] = index;
    });
  
    callings.forEach((calling) => {
      const currentIdx = playerIndexMap[calling];
      [players[currentIdx], players[currentIdx - 1]] = [
          players[currentIdx - 1],
          players[currentIdx],
      ];
      playerIndexMap[players[currentIdx]] = currentIdx  ;
      playerIndexMap[players[currentIdx - 1]] = currentIdx -1;
    });
  
    return players;
  }