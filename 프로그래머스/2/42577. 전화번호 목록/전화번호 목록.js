function solution(phone_book) {
    phone_book.sort();
    return !phone_book.some((v, i) => phone_book[i+1]?.indexOf(v) === 0);
}