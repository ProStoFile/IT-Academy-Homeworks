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
