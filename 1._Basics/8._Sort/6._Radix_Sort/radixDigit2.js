// 주어진 자리에 숫자가 무엇인지 확인
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// 숫자가 몇자리인지 확인
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// 숫자 배열 중 목록에서 가장 큰 자릿수 반환
const mostDigits = (arr) => {
  let maxNum = arr.reduce((pre, cur) => Math.max(pre, cur));
  return digitCount(maxNum);
};

const radixSort = (arrs) => {
  let maxDigitCount = mostDigits(arrs);
  for (let n = 0; n < maxDigitCount; n++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arrs.length; i++) {
      let digit = getDigit(arrs[i], n);
      console.log(digit);
      digitBuckets[digit].push(arrs[i]);
    }
    arrs = [].concat(...digitBuckets);
  }
  return arrs;
};

console.log(radixSort([123, 33, 56745, 1]));
