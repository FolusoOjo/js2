// // 1. Design a for loop that returns an array of even numbers from 1-100

 for (let i = 1; i <= 100; i++) {
     if(i % 2 === 0) {
         console.log(i)
    }
 }

// 2. Returning even numbers between two given numbers
const returnEven = function (a, b) {
    let numArray = [];

    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            if (i % 2 === 0) {
                numArray.push(i);
            }
        }
    }

    return numArray;

}

console.log(returnEven(10, 50));

// 3.
// b;

// 4.
// 1,2,3,4

// 5. The firstFunction problem
const firstFunction = function (a, b) {
    return a + b;
}

// 6. The printSum problem
const printSum = function (a, b) {
    console.log(a + b);
}

// 7. The coursemate names
const coursemateNames = function () {
    let coursemate1 = 'Kehinde Ajibade';
    let coursemate2 = 'Foluso Ojo';
    let coursemate3 = 'Ayomide Ajibade';
    let coursemate4 = 'Oluwibe Faith';
    let coursemate5 = 'Elon Mosque';
    let coursemate6 = 'Richard Makava';
    let coursemate7 = 'Efosa Abu';
    let coursemate8 = 'Romeo Juliet';
    let coursemate9 = 'Abraham Osayi-Ekhor';
    let coursemate10 = 'Victory Garuba';

    return [coursemate1, coursemate2, coursemate3, coursemate4, coursemate5, coursemate6, coursemate7, coursemate8, coursemate9, coursemate10];
}

// 8. Add element to end
let arrayPush = [1, 2, 4]; 
// now lets add 7 to the end
arrayPush.push(7);

// 9.

// Removing last element

let arrayRemove = [1, 2, 3, 8]; 
// now let's remove the last element

arrayRemove.pop();
// console.log(arrayRemove);

// 10.

// Removing first element
let arrayRemoveFirst = [23, 77, 80, 45]
 // Now let's remove the first element
arrayRemoveFirst.shift();

// 11.

// Adding an element to the beginning of an array
let arrayAdd = [[20, 30, 80], [10, 50, 55]]; 
// Now let's add an element to the beginning of the array

arrayAdd.unshift(4);
console.log(arrayAdd);