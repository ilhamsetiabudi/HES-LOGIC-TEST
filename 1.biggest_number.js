function maxRedigit(data, maxNumber) {
    if (!data) {
        return null;
    } else if (typeof(data) !== 'number') {
        return 'data must be a number'
    } else if (data < 1) {
        return null;
    };
    let listNumber = [];
    for (const a of String(maxNumber)) {
        listNumber.push(a);
    }    
    for (const b of String(data)) {
        if (!listNumber.includes(b)) {
            return null;
        }
    };
    const result = Number(String(listNumber).replace(/,/g,''));
    return result;
}

console.log(maxRedigit(123, 321));
console.log(maxRedigit(321, 321));
console.log(maxRedigit(132, 321));
console.log(maxRedigit(-1, 321));
console.log(maxRedigit(0, 321));
console.log(maxRedigit(99, 321));
console.log(maxRedigit(1000, 321));