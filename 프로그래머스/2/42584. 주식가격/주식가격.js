function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0; 
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) {
        break;
      }
    }

    result.push(count); 
  }

  return result;
}