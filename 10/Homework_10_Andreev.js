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
        input = document.createElement('input');

    if (!td) return;

    if (!table.contains(td)) return;

    selectedTd = td;

    if (selectedTd.getAttribute('id') !== 'button') {
        selectedTd.append(input);
        input.setAttribute('type', 'input');
        input.setAttribute('contenteditable', 'true');
        input.focus();

        input.onblur = function () {

            selectedTd.textContent = input.value;
            input.remove();
        }

        input.onfocus = function () {
            input.value = selectedTd.textContent;
            textContent.remove();
        }

    }

};