function solution(want, number, discount) {
    const map = want.reduce((acc, v, i) => {
        acc.set(v, number[i]);
        return acc;
    }, new Map());
    
    const check = () => {
        let flag = true;
        for (const [, count] of map) {
            if (count > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };
    
    for (let i = 0; i < 10; i++) {
        if (!map.get(discount[i])) {
            map.set(discount[i], 0);
        }
        map.set(discount[i], map.get(discount[i]) - 1);
    }
    
    let result = check() ? 1 : 0;
    
    for (let i = 10; i < discount.length; i++) {
        const prev = discount[i - 10];
        const next = discount[i];
        if (!map.get(next)) {
            map.set(next, 0);
        }
        map.set(prev, map.get(prev) + 1);
        map.set(next, map.get(next) - 1);
        
        if (!check()) {
            continue;
        }
        
        result++;
    }
    
    return result;
}