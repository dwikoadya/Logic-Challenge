function spiral(param1) {
    var count = 0;
    var array = [];
    var hasil = [];
    for (let i = 0; i < param1; i++) {
        array[i] = []
        for (let j = 0; j < param1; j++) {
            array[i][j] = count
            count++   
        }
    }
    while(array.length > 1) {
        hasil = hasil.concat(array.splice(0, 1)[0]);
        for (let k in array) {
            hasil.push(array[k].splice(-1)[0]);
        }
        hasil = hasil.concat(array.splice(-1,1)[0].reverse());
        for (let k = array.length - 1; k >= 0; k--) {
            hasil.push(array[k].splice(0, 1)[0])
        }
    }
    if (array.length > 0) {
        hasil.push(array.pop()[0])
    }
    console.log(hasil.toString())
}
spiral(5)
spiral(6)
spiral(7)