function multiple(maxNumber, countNumber) {
    if (typeof(maxNumber) !== 'number') {
        return 'maxNumber must a number'
    }
    if (typeof(countNumber) !== 'number') {
        return 'countNumber must a number'
    }
    const data = [];
    let total = 0
    for (let a = 0; a < maxNumber; a++) {
        if ((a % 3 === 0 || a % 5 === 0) && a > 0) {
            data.push(a);
            total += a;
        }
    }
    if (total !== countNumber) return 'maxNumber with countNumber not match';
    return data.length > 0 ? String(data).replace(/,/g, ' + ') : 'maxNumber with countNumber not match';
}

console.log(multiple(10, 23))