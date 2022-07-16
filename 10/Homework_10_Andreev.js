var button = document.getElementById('button'),
    table = document.getElementById('table')

button.addEventListener('click', function addString() {
    var newString = document.createElement('tr'),
        newItem1 = document.createElement('td'),
        newItem2 = document.createElement('td'),
        newItem3 = document.createElement('td');
    table.prepend(newString);
    newString.append(newItem1);
    newString.append(newItem2);
    newString.append(newItem3);
})

var selectedTd;

table.onclick = function (event) {
    var td = event.target.closest('td'),
        itemText;

    if (!td) return;

    if (!table.contains(td)) return;

    selectedTd = td;

    if (selectedTd.getAttribute('id') !== 'button') {
        var input = document.createElement('input');

        selectedTd.replaceWith(input);

        input.setAttribute('type', 'input');
        itemText = selectedTd.innerText;

        input.value = itemText;
        input.focus();

        input.addEventListener('keydown', function (evt) {
            if (evt.keyCode === 13) {
                input.blur();
            }
        });

        input.onblur = function saveTableData() {
            itemText = input.value;
            selectedTd.innerHTML = itemText;
            input.replaceWith(selectedTd);
        }

    }

};



