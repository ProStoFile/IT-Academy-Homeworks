function Animal(name) {
    var foodAmount = 50,
        self = this;
    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 30 || amount > 100) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    self.name = name;

    self.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    this.name = name;

    var animalFeed = this.feed;
    this.feed = function () {
        animalFeed();
        this.happyMessage();
        return this;
    }

    this.happyMessage = function () {
        console.log('Кот доволен ^_^');
    };

    this.stroke = function(){
        console.log('Гладим кота.');
        return this;
    }
}

var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm());
barsik.feed();

console.log(barsik.dailyNorm(200));
barsik.feed();

console.log(barsik.dailyNorm(75));
barsik.feed();

barsik.feed().stroke().feed().stroke();
