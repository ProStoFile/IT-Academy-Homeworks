// Task 1

function Animal(name) {
    this._foodAmount = 50;
    this._name = name;
}

Animal.prototype._formatFoodAmount = function (foodAmount) {
    return this._foodAmount + ' гр.';
}

Animal.prototype._dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 30 || amount > 100) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype._feed = function () {
    console.log('Насыпаем в миску ' + this._dailyNorm() + ' корма.');
    return this;
};

function Cat(name) {
    Animal.apply(this, arguments);

    this._name = name;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype._animalFeed = function () {
    Animal.prototype._feed.apply(this);
    console.log('Кот доволен');
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
}


var barsik = new Cat('Барсик');

console.log(barsik._dailyNorm());
barsik._feed();

console.log(barsik._dailyNorm(200));
barsik._feed();

console.log(barsik._dailyNorm(75));
barsik._feed();

barsik._feed().stroke()._feed().stroke();

// Task 2

var user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};



function clone(object) {

    var cloneObject = {};

    for (var key in object) {

        if (typeof object[key] == "object") {
            cloneObject[key] = clone(object[key]);
        } else {
            cloneObject[key] = object[key];
        }

    }

    console.log(cloneObject);

    return cloneObject;
}

clone(user);

clone(initialObj);

// Task 3

var user2 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

var user3 = {
    name: "Vasya",
    sizes: {
        height: 182,
        width: 50
    }
};

function isEqual(object1, object2) {
    const propsObject1 = Object.getOwnPropertyNames(object1);
    const propsObject2 = Object.getOwnPropertyNames(object2);

    if (propsObject1.length !== propsObject2.length) {
        return false;
    }

    for (var i = 0; i < propsObject1.length; i += 1) {
        const prop = propsObject1[i];
        const bothAreObjects = typeof (object1[prop]) === 'object' && typeof (object2[prop]) === 'object';

        if ((!bothAreObjects && (object1[prop] !== object2[prop]))
            || (bothAreObjects && !isEqual(object1[prop], object2[prop]))) {
            return false;
        }
    }

    return true;
}

console.log(isEqual(user2, user3));