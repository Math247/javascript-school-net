var click_me = document.getElementById("click_me");
var input = document.getElementsByClassName("number_val_input");
var btn_generate = document.getElementById("generate_btn");
var body1 = document.getElementsByTagName('body');

var title = document.getElementById('h1');
title.style.color  = '#fff000';

var select = document.createElement('select');
select.style.background = '#000000';
body1[0].appendChild(select);
for(var i = 0; i < 10; i++){
    var option = document.createElement('option');
    option.id = '#id_' + i;
    option.value = i;
    option.innerHTML = i;
    select.appendChild(option);
}

btn_generate.addEventListener('click', generate);

function generate(){
    var value = input[0].value;
    for(var i = 0; i < value; i++){
        var int = document.createElement('input');
        int.id = "btn_" + i;
    
        var body = document.getElementsByTagName('body');
        body[0].appendChild(int);
    }
}

click_me.addEventListener("click", fnClickMe);
function fnClickMe(){
    alert("You clicked me");
}

function validar(){
    var number = document.getElementById("number_val").value;
    if(isNaN(number) || (number >= 1 && number <= 10)){
        alert("Imput is not valid");
    }else{
        alert("Input is valid");
    }
}

function over(elemento){
    elemento.innerHTML = "Over me";
    elemento.style.background = '#ffffff';
}

function out(elemento){
    elemento.style.background = '#fff000';
    elemento.color = '#ccc';
}

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


var prop1 = prompt ('Model?');
var prop2 = prompt ('Name?');
var prop3 = prompt ('Color');

//criando um novo objeto
var obj = {};
obj.model = prop1;
obj.name = prop2;
obj.color = prop3;
obj.start = function(){
    console.log('I m  ready');
}

console.log(obj);
obj.start();
