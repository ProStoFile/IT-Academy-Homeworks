// Task 1

console.log("Task 1");

var array = ["Квентин", "Лео", "Кристофер"];

function getArrObjects(arr) {
    var arrObjects = [],
        length = arr.length;

    for (var i = 0; i < length; i++) {
        arrObjects[i] = {
            name: arr[i]
        }

    }
    console.log(arrObjects);
}

getArrObjects(array);

// Task 2

console.log("Task 2");

var array2 = ["00", "13", "24"],
    array3 = ["11", "22", "33"];

function getTime(arr) {

    var stringTime = "Текущее время";
    arr.forEach(function (item) {
        stringTime += " : " + item;

    });

    console.log(stringTime);

    return stringTime;

}

getTime(array2);
getTime(array3);

// Task 3

console.log("Task 3");

function getVowelsCount(text) {

    var vowelList = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"],
        count = 0;

    text.toLowerCase()
        .split("")
        .forEach(function (letter) {
            if (vowelList.indexOf(letter) !== -1) {
                count++;
            }
        });

    console.log("Количество гласных: " + count);
}

getVowelsCount("Строка с текстом");

// Task 4

console.log("Task 4");

var string = "Привет, студент! Студент... Как дела, студент?";

function countSentencesLetters(text) {
    var newText,
        newTextForCount;

    newText = text.split("!")
        .join(".")
        .split("?")
        .join(".")
        .split("...")
        .join(".")
        .split(".");
    newText.pop();

    newTextForCount = newText.join(".")
        .split(",")
        .join("")
        .split(" ")
        .join("")

        .split(".");

    newText.forEach(function (item, i) {
        console.log(item + ": " + "Количество букв: " + newTextForCount[i].length);
    })

}

countSentencesLetters(string);

// Task 5

console.log("Task 5");

var string = "Привет, студент! Студент... Как дела, студент?",
    string2 = "Help me help you help others with your help";

function repetitionsNumber(string) {
    var wordsArr = string.split(",")
        .join("")
        .split("!")
        .join("")
        .split("?")
        .join("")
        .split("...")
        .join("")
        .split(".")
        .join("")
        .toLowerCase()
        .split(" "),
        counts = {},
        maxCount = 1,
        wordWithMaxCount;

    wordsArr.forEach(function (i) {
        counts[i] = counts[i] + 1 || 1;
    });

    var valuesArr = Object.values(counts);
    var keysArr = Object.keys(counts);

    maxCount = Math.max.apply(null, Object.values(counts))
    wordWithMaxCount = keysArr[valuesArr.indexOf(maxCount)];

    console.log("Максимальное число повторений у слова \"" + wordWithMaxCount + "\" - " + maxCount + " раз(a).")

}

repetitionsNumber(string);
repetitionsNumber(string2);