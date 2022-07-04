// Создать класс Animal. Перенести в него все свойства и методы. 
// Отнаследоваться внутри Cat от Animal.
// Расширить метод feed для кошек. 
// Теперь он должен выводить в консоль информацию вида:
// "Насыпаем в миску (количество гр.) корма.
// Кот доволен ^_^"
// Использовать вызов родительского метода вида animalFeed() 
// и сохранение контекста this через переменную.
// Все вызовы, которые работали ранее, должны по-прежнему работать 
// корректно.

// Добавить публичный метод stroke, 
// который будет выводить в консоль информацию "Гладим кота.".
// Доделать метод feed таким образом, чтобы можно было цепочкой 
// вызывать его и метод stroke в любой
// последовательности и сколько угодно раз.
// (Лишние логи можно убрать, делать всё в том же задании).

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
