sentenceManipulation = sentence => {
    var pisah = sentence.split(" ");
    var hasil = [];
    for (let i = 0; i < pisah.length; i++) {
        hasil.push(stringManipulation(pisah[i]));
    }
    console.log(typeof hasil)
    return hasil.join(" ").toString();
    
}

stringManipulation = word => {
    var huruf = word.charAt(0);
    if (huruf == 'a' || huruf == 'i' || huruf == 'u' || huruf == 'e' || huruf == 'o') {
        return word;
    } else {
        return word.slice(1) + word.slice(0, 1) + 'nyo';
    }
}

console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'));
