function generateCombinations(checkNumber) {
    const combinations = [];
  
    function helper(tempCombination, start) {
      if (tempCombination.length === 4) {
        combinations.push(tempCombination.join(""));
        return;
      }
  
      for (let i = start; i < checkNumber.length; i++) {
        tempCombination.push(checkNumber[i]);
        helper(tempCombination, i + 1);
        tempCombination.pop();
      }
    }
  
    helper([], 0);
  
    return combinations;
  }
  
  function isValidPassword(password) {
    const digitCount = {};
    for (const digit of password) {
      digitCount[digit] = (digitCount[digit] || 0) + 1;
      if (digitCount[digit] >= 3) {
        return false;
      }
    }
    return true;
  }
  
  function isValidPart(number) {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
      if (!isValidPassword(number[i])) {
        continue;
      }
      count++;
    }
    return count;
  }
  function countValidPasswords(phone_number, birthday) {
    const phoneDigits = phone_number.slice(5);
    const phonePart = new Set(generateCombinations(phoneDigits));
    const birthdayPart = new Set(generateCombinations(birthday));
  
    const validPhonePart = isValidPart(Array.from(phonePart));
    const validBirthDayPart = isValidPart(Array.from(birthdayPart));
    let count = 0;
    for (let i = 0; i <= 9999; i++) {
      const password = i.toString().padStart(4, "0");
  
      if (!isValidPassword(password)) {
        continue;
      }
  
        count++;
    }
    return count - validPhonePart - validBirthDayPart;
  }
  // 예시 입력값을 사용하여 결과를 출력
  console.log(countValidPasswords("(010)54662345", "20010923")); // 9545
  console.log(countValidPasswords("(010)11111111", "20020111")); // 9619
  console.log(countValidPasswords("(010)12345678", "19990909")); // 9550