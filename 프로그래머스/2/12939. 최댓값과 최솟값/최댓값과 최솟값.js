function solution(s) {
    let newS = s.split(" ")
    let result= Math.min(...newS)+" "+Math.max(...newS)
    return result;
}