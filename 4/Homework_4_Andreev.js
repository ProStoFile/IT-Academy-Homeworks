// // Task 1 //

console.log("Task 1");

var Object = { name: "John" },
    emptyObject = {};

function isEmpty(obj) {
    for (var key in obj) {
        console.log("false");
        return false;
    }
    console.log("true");
    return true;

}

isEmpty(Object);
isEmpty(emptyObject);

// // Task 2 (fixed) //

console.log("Task 2");

var x,
    n,
    powResult,
    i;

function pow(x, n) {
    x = +prompt("X: "),
        n = +prompt("N: "),
        powResult = 1;
    if (x > 0 && x % 1 == 0 && n > 0 && n % 1 == 0) {
        for (i = 0; i < n; i++) {
            powResult *= x;
        }
    } else {
        console.log("Not a simple number");
    }
    console.log(powResult);
    return powResult;
}

pow(x, n);

// Task 3 // 

console.log("Task 3");

var n = +prompt("N: "),
    i,
    sum = 0;

function oneSumTo(n) {

    // 2-е место.  

    for (i = n; i >= 1; i--) { sum += i; }

    return sum;
}

sum = 0;

function twoSumTo(n) {

    // 3-е место. Самый медленный способ, т.к. приходится 
    // тратить ресурсы на выполнение вложенной функции.

    // При помощи рекурсии не будет подсчитан sumTo(100000).
    // Из-за особенностей движка JavaScript стек будет перегружен

    if (n < 1) return;
    if (n == 1) return 1;
    return sum = n + twoSumTo(n - 1);

}

sum = 0;

function threeSumTo(n) {

    // 1-е место. Самый быстрый способ. 
    // Нет циклов и рекурсий, просто 3 операции при любом значении n

    return sum = n * (n + 1) / 2;

}


console.log("1: " + oneSumTo(n) + "\n" + "2: " + twoSumTo(n) + "\n" + "3: " + threeSumTo(n));

// Task 4 (fixed)//

var arr1 = [1, "abc", [2], [3, 4], 5],
    arr2 = [
        5, 7,
        [4, [2], 8, [1, 3], 2],
        [9, []],
        1, 8
    ];

function treeSum(array) {

    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "object" && array[i] !== null && typeof array[i].length === "number") {
            sum += treeSum(array[i]);
        } else if (isNaN(array[i]) == false && array[i] !== NaN) {
            sum += array[i];
        }

    }
    return sum;
}

console.log(treeSum(arr1));
console.log(treeSum(arr2));