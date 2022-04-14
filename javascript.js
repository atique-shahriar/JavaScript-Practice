var name = 'Atique';

var age = 20;
//const declearation
const x = 1;
//x = 2; // error, not possible, because x declear as a constant
document.write(name)
console.log(name);
alert(name);
console.log(x);


console.log(age);

console.log("This is " + name + ". Age " + age);

//var -> function
function hello() {
    for (var i = 0; i <= 5; i++) {

        console.log(i);
    }
    console.log(i);

}

//let -> block

function hello2() {
    for (let i = 0; i <= 5; i++) {

        console.log(i);
    }
    // console.log(i); // Not Execute

}
hello();
hello2();



//Calculator

var n1, n2;
n1 = prompt("Enter Number 1: ");
n2 = prompt("Enter Number 2: ");

n1 = parseInt(n1);
n2 = parseInt(n2);


console.log("Sum: " + n1 + " + " + n2 + " = " + (n1 + n2));
if (n1 > n2) {
    console.log("Sub: " + n1 + " - " + n2 + " = " + (n1 - n2));
} else {
    console.log("Sub: " + n2 + " - " + n1 + " = " + (n2 - n1));
}
console.log("Mul: " + n1 + " * " + n2 + " = " + (n1 * n2));
console.log("Div: " + n1 + " / " + n2 + " = " + (n1 / n2));
console.log("Mod: " + n1 + " % " + n2 + " = " + (n1 % n2));
console.log("Pow: " + n1 + " ^ " + n2 + " = " + (n1 ** n2));


let y = 5;

if (y % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

let i = 0;

for (i = 0; i < 10; i++) {
    document.write("Atique ");
    document.write("Shahriar<br>");
    console.log("Atique");
}

let flag = 0;
for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
        flag = flag + i;
    }
}
console.log(flag);


// IIFEs Function (Immedaitely Invokable Function Expression)
((a, b) => {
    let sum = a + b;
    console.log(sum);
})(5, 6);


//Function Expression
let display = function new2(m) {
    console.log("This is Atique Shahriar");
    console.log(m);
}
display("I am a student");


// Array
let arr = new Array(2);

for (i = 0; i < 2; i++) {
    arr[i] = prompt("Number: " + (i + 1));
}

for (i = 0; i < 2; i++) {
    console.log(arr[i]);
}
console.log(arr);
console.log(arr.length);

//Push
arr.push('u'); // Last index add
console.log(arr);
console.log(arr.length);

// arr[3].push('atik'); error

//Pop
arr.pop(); // delete last index
console.log(arr);
console.log(arr.length);

//Shift
arr.shift(); // First index delete
console.log(arr);
console.log(arr.length);

//Unshift
arr.unshift(); // First index add
console.log(arr);
console.log(arr.length);

//Splice
//Adding element with splice (index,no_of_remove elements(0,....),New elements)
arr.splice(1, 0, 5, 6, 7, 8, 6);
console.log(arr);
console.log(arr.length);

// Delete elements (starting index, to ending index){
arr.splice(1, 3);
console.log(arr);
console.log(arr.length);

//sotred // reverse
let newArr = arr.sort();
console.log(newArr);
console.log(newArr.length);

newArr.reverse();
console.log(newArr);


var t1 = 'Atique';
var t2 = " Shahriar";

var text;

console.log(t1);
console.log(t1.length);

console.log(t1.charAt(2)); //index 2 = i
console.log(t1.charAt(5)); //index 5 = e
console.log(t1.charAt(7)); //index 7 = null

console.log(t1.toUpperCase());
console.log(t2.toLowerCase());

console.log(t1.concat(t2));
console.log(t1.concat(t2).length);

console.log(t1.slice(1, 5));
console.log(t1.slice(1, 3));
console.log(t1.slice(3, 1)); //null