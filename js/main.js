console.log("Hello World");
//quando usamos aspas, se torna um caractere, e vira uma string;
var number = 0;
console.log(typeof number);
number = "0"
console.log(typeof number);

var age = prompt("How old are you?");
if(age >= 18){
    console.log("You are authorized");
}else{
    console.log("You are not authorized");
}

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

var i = 0;
while (i < 10){
    console.log(i);
    i++
}

for (var a = 0; a < 10; a++){
    console.log(a);
}

[0, 1, 2, 3, 4, 5, 6].forEach(function(value, key){
    console.log(value, key);
});

