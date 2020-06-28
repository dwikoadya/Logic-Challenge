function weirdMultiply(sentence) {
    var str = sentence.toString();
    var hasil = 1;
    if (sentence < 10) {
        return sentence
    }
    for (let i = 0; i < str.length; i++) {
        hasil *= str[i]
    }
    return weirdMultiply(hasil)
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
