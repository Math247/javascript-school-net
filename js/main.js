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

function myFunction(name){
    console.log("Name =>", name);
}

myFunction("Matheus");

//função auto executável, é executada sem precisar ser chamada
(function check(name){
    return console.log("Name => " + name);
})("Matheus");

var ft = ["Matheus", "Luiz"];

var ft1 = ["Gabriel"];

//adiciona no array na ultima posição
ft.push("Leonan");

console.log(ft);

//pega o ultimo item do array e elimina
ft.pop();

console.log(ft);

//adiciona no array na primeira posição
ft.unshift("Gabi");

console.log(ft);

console.log(ft[2]);

//remove o primeiro item do array
ft.shift();

//escolhe qual elemento do array irá remover
ft.splice(0, 1);

//pega o index do determinado elemento
ft.indexOf("Matheus");

//juntar dois arrays
var result = ft.concat(ft1);