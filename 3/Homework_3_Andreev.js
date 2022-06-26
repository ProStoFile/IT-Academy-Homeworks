// Task 1 //

var styles = ["Jazz", "Blues"];

styles.push("Rock'n'roll");

styles[styles.length - 2] = "Classic";

alert(styles.shift());

styles.unshift("Rap", "Reggae");

// Task 2 //

for (var i = 2; i <= 10; i += 2) {
    alert(i);
}

for (var i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

for (var i = 20; i <= 100; i += 20) {
    alert(i / 10);
}

for (var i = 3; i <= 11; i += 2) {
    alert(i - 1);
}

// Task 3 (fixed) //

var arr = [],
    i = 0,
    result = 0,
    inputCheck = true;

while (inputCheck) {

    var inputValue = prompt("Input value of number " + (i + 1) + ":");

    if (inputValue === "") {
        inputCheck = false;
    } else if (inputValue === null || isNaN(inputValue)) {
        inputCheck = false;
    } else {
        arr.push(Number(inputValue));
        i++;
    }

}

for (var i = 0; i < arr.length; i++) {
    result += arr[i];
}

alert(result);

// Task 4 //

var start = 2,
    end = 10,
    arrayOfPrimeNumbers = [],
    i,
    j;

nextItem:

for (i = start; i <= end; i++) { 

    for (j = 2; j < i; j++) { 
        if (i % j == 0) continue nextItem; 
    }

    arrayOfPrimeNumbers.push(i); 
}

alert(arrayOfPrimeNumbers);

