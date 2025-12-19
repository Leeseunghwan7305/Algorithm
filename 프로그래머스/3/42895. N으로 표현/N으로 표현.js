function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set());

  for (let k = 1; k <= 8; k++) {
    const concat = Number(String(N).repeat(k));
    dp[k].add(concat);

    for (let i = 1; i < k; i++) {
      for (const a of dp[i]) {
        for (const b of dp[k - i]) {
          dp[k].add(a + b);
          dp[k].add(a - b);
          dp[k].add(a * b);
          if (b !== 0) dp[k].add(Math.trunc(a / b));
        }
      }
    }

    if (dp[k].has(number)) return k;
  }

  return -1;
}
