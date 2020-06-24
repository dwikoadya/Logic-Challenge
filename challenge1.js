function sum() {
    var z = 0;
    for (let i = 0;i < arguments.length; i++) {
        z += arguments[i];
    }
    console.log(z);
}

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9)