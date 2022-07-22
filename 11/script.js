var button = document.querySelector('button'),
    body = document.querySelector('body'),
    inputX = document.getElementById('x'),
    inputY = document.getElementById('y'),
    inputs = document.querySelectorAll('input'),
    x,
    y;

button.disabled = true;

function handleChange() {
    for (const input of inputs) {
        if (input.value === "") {
            button.setAttribute('disabled', '');
            return;
        }
    }
    button.removeAttribute('disabled');
}

for (const input of inputs) {
    input.onkeyup = input.change = handleChange;
}

button.addEventListener('click', function addTable() {
    var arrItems = [];

    x = inputX.value;
    if (isNaN(x) === false) {
        x = Number(x);
    }
    y = inputY.value;
    if (isNaN(y) === false) {
        y = Number(y);
    }


    if (x < 0 || x > 10 || Number.isInteger(x) === false) {
        alert('Введите корректное значение в поле X - целое число от 1 до 10.');
        inputX.value = '';
        button.setAttribute('disabled', '');
    }
    if (y < 0 || y > 10 || Number.isInteger(y) === false) {
        alert('Введите корректное значение в поле Y - целое число от 1 до 10.');
        inputY.value = '';
        button.setAttribute('disabled', '');
    }

    if (document.body.children[2]) {
        var oldTable = document.querySelector('table');
        oldTable.remove();
    }


    var table = document.createElement('table');
    body.append(table);

    for (var i = 0; i < y; i++) {
        var tr = document.createElement('tr');
        table.append(tr);
        for (var j = 0; j < x; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            arrItems.push(td);
        }

    }

    for (var i = 0; i < arrItems.length; i++) {
        if (i % 2 == 0) {
            arrItems[i].classList.add('black');
        }
    }

    table.onclick = function (event) {
        var td = event.target.closest('td');

        if (!td) return;

        if (!table.contains(td)) return;

        selectedTd = td;

        for (var i = 0; i < arrItems.length; i++) {
            if (arrItems[i].getAttribute('class') === 'black') {
                arrItems[i].classList.remove('black');
            } else {
                arrItems[i].classList.add('black');
            }
        }

    };


})





