var body = document.querySelector("body");

var element;

var newElement;

for (var i = 0; i <= 10; i++) {
  element = document.createElement("div");
  element.innerText = "Foo";
  element.style.color = "blue";

  for (var j = 0; j <= 5; j++) {
    newElement = document.createElement("p");
    newElement.innerText = "duch";
    newElement.style.color = "yellow";
    newElement.style.marginLeft = "20px";
    element.appendChild(newElement);
  }

  body.appendChild(element);
}

document.querySelectorAll('div:nth-child(odd)').forEach(element => element.style.background = 'green'
)

document.querySelectorAll('p').forEach(element =>  element.addEventListener('click', event => event.target.style.backgroundColor = 'aqua'))