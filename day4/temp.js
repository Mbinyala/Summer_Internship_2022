function celsius(f){
    let c = (f-32)*5/9;
    return c;
}

function faherheit(c){
    let f = (c*9)/5+32;
    return f;

}

console.log(celsius(45))
console.log(faherheit(60))
