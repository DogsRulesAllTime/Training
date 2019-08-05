'use strict';

// One line comment

/*
Several lines comment
*/


var leftBorderWidth = 1;
{
    let second = 2;
    console.log(second);
}

const pi = 3.14;

let objOne = {
    name: '1',
    age: '22'
};
let objTwo = {
    name: '2',
    age: '30'
};

let arr = [objOne,objTwo];

let int = 3;
let str = 'hi guys!';
let bool = true;
console.log(int);
console.log(str);
console.log(bool); 

// alert("qq");

// let b = confirm('Are u ok?');

// if (b == true) {
//     alert('true');   
// }else{
//     alert('false');
// }
// let va = prompt('ure age?', 'none');
// console.log(va);

// console.log(typeof(va));

let incr = 5,
    decr = 5;
console.log(++incr);
console.log(--decr);

console.log(incr++);
console.log(decr--);

console.log(incr);
console.log(decr);

console.log(213%13);

console.log('2' == 2);

console.log('2' === 2);

let q = true,
    w = true;           //!w == false;
console.log(q && w);
console.log(q && !w);
console.log(q || w);
console.log(q || !w);

