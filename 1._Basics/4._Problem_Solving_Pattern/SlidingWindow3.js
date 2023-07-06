/*

Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

const findLongestSubstring = (str) => {
    let start = 0; // 윈도우의 시작 인덱스
    let longest = 0; // 가장 긴 부분 문자열의 길이
    const seen = {}; // 각 문자의 마지막 인덱스를 저장하는 객체
  
    for (let end = 0; end < str.length; end++) {
      const char = str[end];
      if (seen[char]) {
        // 이미 등장한 문자일 경우
        // 윈도우의 시작을 중복 문자의 다음 인덱스로 이동
        start = Math.max(start, seen[char]);
      }
      // 현재 문자의 인덱스를 저장
      seen[char] = end + 1;
      // 가장 긴 부분 문자열의 길이 갱신
      longest = Math.max(longest, end - start + 1);
    }
  console.log(seen);
    return longest;

  };

// console.log( findLongestSubstring('') );// 0
console.log( findLongestSubstring('rithmschool') );// 7
console.log( findLongestSubstring('thisisawesome') );// 6
console.log( findLongestSubstring('thecatinthehat') );// 7
console.log( findLongestSubstring('bbbbbb') );// 1
console.log( findLongestSubstring('longestsubstring') );// 8
console.log( findLongestSubstring('thisishowwedoit') );// 6