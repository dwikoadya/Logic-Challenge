function indexPrime(param1) {
    var hasil = [];
    for (let i = 2; i <= param1 * param1; i++) {
        for(let j = 2; j <= i; j++) {
            if (i === j) {
                hasil.push(i)
            } if (i % j === 0) {
                break;
            }
        }
    }
    return hasil[param1 - 1]
}

console.log(indexPrime(4));
console.log(indexPrime(500));
// console.log(indexPrime(37786));