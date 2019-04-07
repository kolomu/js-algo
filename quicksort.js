const list = [7, 7, 3, 3, 1, 1, 4, 4, 1, 22, 22, 8, 8, 1, 9, 9, -5];

function qsort(arr) {
    // base case if it is a single / no element, it is already sorted
    if (arr.length < 2) {
        return arr;
    }

    // recursive case 
    const pivotIdx = getRandomInt(arr.length - 1);
    const pivot = arr[pivotIdx];

    // remove the pivot from the array, so we reduce the size of arr every call
    arr.splice(pivotIdx, 1);

    // it has to be less or equal, else we would filter all equal numbers
    const lessThanPivot = arr.filter(num => num <= pivot);
    const greaterThanPivot = arr.filter(num => num > pivot);

    return flatten([qsort(lessThanPivot), pivot, qsort(greaterThanPivot)]);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const flatten = (arr) => arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(qsort(list));