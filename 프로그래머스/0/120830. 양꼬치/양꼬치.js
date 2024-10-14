function solution(n, k) {
    const service = parseInt(n/10);
    const sum = n*12000 + (k-service) * 2000;
    return sum;
    
}