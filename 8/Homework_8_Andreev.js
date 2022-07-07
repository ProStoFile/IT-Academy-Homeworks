// Task 1

console.log('Task 1');

function filterNumbersArr(numbers) {
    var newArr = [];

    var newArr = numbers.filter(function (number) {
        return number > 0;
    })

    console.log(newArr)

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);

// Task 2

console.log('Task 2');

function findFirstPositive(arr) {
    var firstPosNum = arr.find(function (num) {
        return num > 0;
    })
    console.log(firstPosNum);
}

findFirstPositive([-1, 0, 2, 34, -2]);

// Task 3

console.log('Task 3');

function isPalindrome(word) {

    var isPalindrome = true,
        arrOfLetters = word.toLowerCase().split(''),
        length = arrOfLetters.length;

    for (var i = 0; i < length; i++) {
        if (arrOfLetters[i] !== arrOfLetters[length - 1 - i]) {
            isPalindrome = false;
        }
    }


    console.log(isPalindrome);
}

isPalindrome('Шалаш');
isPalindrome('Привет');

// Task 4

console.log('Task 4');

function areAnagrams(word1, word2) {
    var areAnagrams = true,
        newWord1 = word1.toLowerCase().split('').sort(),
        newWord2 = word2.toLowerCase().split('').sort(),
        length = newWord1.length;

    if (length != newWord2.length) {
        areAnagrams = false;
    } else {
        for (var i = 0; i < length; i++) {
            if (newWord1[i] !== newWord2[i]) {
                areAnagrams = false;
            }
        }

    }


    console.log(areAnagrams);

    return areAnagrams;
}

areAnagrams('кот', 'Отк'); 
areAnagrams('кот', 'атк'); 
areAnagrams('кот', 'отко'); 

// Task 5

console.log('Task 5');


function divideArr(arr, size) {
    var newArr = [];
    if (size != 0) {
        for (var i = 0; i < Math.ceil(arr.length / size); i++) {
            newArr[i] = arr.slice((i * size), (i * size) + size);
        }

    } else {
        newArr = arr;
    }
    console.log(newArr);
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);
divideArr([1, 2, 3, 4, 5], 0);

// Task 6

console.log('Task 6');

function isDegreeOfTwo(num) {
    var isDegreeOfTwo = false;

    if ((Math.log2(num) % 1) == 0) {
        isDegreeOfTwo = true;
    }
    console.log(isDegreeOfTwo);
}

isDegreeOfTwo(8);
isDegreeOfTwo(1);
isDegreeOfTwo(256);

isDegreeOfTwo(17);
isDegreeOfTwo(257);
isDegreeOfTwo(0);