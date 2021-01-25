var a = 10; //Var tiene un scope global

if (true) {
    var a = 20;
}

var a = 30;
console.log(a);

/**  ----- */
let b = 10; //Let tiene un scope especifico por bloques

if (true) {
    let b = 20;
}

//let b = 30; //En el scope global let no puede ser declarada mas de una ves 
console.log(b);