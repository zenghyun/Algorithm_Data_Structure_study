function solution(seats) {
    const groups = seats.split("#"); // '#'을 기준으로 자리 그룹을 나눔
    let minOccupiedSeats = 0;
    let maxOccupiedSeats = 0;

    groups.forEach((group) => {
        if (group.length > 0) {
            console.log("🚀  group", group)
        const groupLength = group.length;
        const groupMax = Math.ceil(groupLength / 2);
        const groupMin = groupLength === 1 ? 1 : groupLength === 6 ? Math.floor((groupLength-1)/2) : Math.floor(groupLength /2);
        maxOccupiedSeats += groupMax;
        minOccupiedSeats += groupMin;
      }
    });
  
  
    return [minOccupiedSeats, maxOccupiedSeats];
  }
  
  // 예제 테스트 케이스
  console.log(solution("...#.....")); // [3, 5]
  console.log(solution("......")); // [2, 3]
  console.log(solution("..##..")); // [2, 2]
  