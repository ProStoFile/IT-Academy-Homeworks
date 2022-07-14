var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.querySelector('button'),
    firstParChildren = firstPar.children,
    secondParChildren = secondPar.children;

button.addEventListener('click', function changeColor() {
    for (var i = 0; i < firstParChildren.length; i++) {
        firstParChildren[i].classList.add('green');
    }
})


for (var i = 0; i < secondParChildren.length; i++) {
    secondParChildren[i].id = 'secondParLink' + [i + 1];
}

var selectedLink;

secondPar.onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'A') {
        event.preventDefault();
        alert(target.getAttribute('href'));
    }
};
