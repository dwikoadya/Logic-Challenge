function deretKaskus(n) {
    var arith = n * 3;
    var hasil = [];
    for (let i = 3; i <= arith; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) {
            hasil.push('KASKUS')
        } else if (i % 5 == 0) {
            hasil.push('KAS')
        } else if (i % 6 == 0) {
            hasil.push('KUS')
        } else {
            hasil.push(i)
        }
    }
    return hasil
}

console.log(deretKaskus(10))