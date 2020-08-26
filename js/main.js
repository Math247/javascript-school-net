/*console.log("Hello World");
//quando usamos aspas, se torna um caractere, e vira uma string;
var number = 0;
console.log(typeof number);
number = "0"
console.log(typeof number);
*/
var age = prompt("How old are you?");
/*if(age >= 18){
    console.log("You are authorized");
}else{
    console.log("You are not authorized");
}
*/
switch (true){
    case (age >= 18):
        console.log("You are authorized switch");
    break
    case (age < 18):
        console.log("You are not authorized switch");
    break
    default:
        console.log("default function");
}