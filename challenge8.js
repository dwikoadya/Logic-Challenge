function pola(str) {
    var hasil = [];
    var pisah = str.toString().split(" ");
    var kiri = pisah[0].indexOf('#');
    var kanan = pisah[4].indexOf('#');
    var kiri1 = pisah[0].slice(0, kiri);
    var kiri2 = pisah[0].slice(kiri + 1);
    var kanan1 = pisah[4].slice(0, kanan);
    var kanan2 = pisah[4].slice(kanan + 1);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            var kiri3 = parseInt(kiri1 + i + kiri2)
            var kanan3 = parseInt(kanan1 + j + kanan2)
            if (kiri3 * pisah[2] === kanan3) {
                hasil.push(i, j)
            }
        }
    }
    return hasil
}


console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));
