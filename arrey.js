//1.
let products = ['Apple', 'Chery', 'Strawberry', 'Plum'];

function getLastElem(arr) {
    return arr.length - 1;
}

console.log(products[getLastElem(products)]);

//2.
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Класика';
console.log(styles.shift());
styles.splice(0, 0, 'Реп', 'Реггі');

//3.
function find(arr, value) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            index = i;
        }
    }
    return index;
}

console.log(find(styles, 'Реггі'));

//4.
let numbers = [23, 2, 5, 19, 7, 1, 0, 11, 9, 45, 6, 4];

function filterRange(array, a, b) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= a && array[i] <= b) {
            result.push(array[i]);
        }
    }
    return result;

}
console.log(filterRange(numbers, 10, 25));

//5.
let str = 'my-short-string';

function camelize(str) {
    let arr = str.split("-");
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}
console.log(camelize(str));
