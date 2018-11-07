var body = document.querySelector("body");

var table = document.createElement("table");
var tbody = document.createElement("tbody");

var tr;
var td;

for (var i = 0; i < 7; i++) {
  tr = document.createElement("tr");

  for (var j = 0; j < 7; j++) {
    td = document.createElement("td");
    td.classList.add(".td");

    td.style.background = (i + j) % 2 === 0 ? "aqua" : "blue";

    tr.appendChild(td);
  }

  table.appendChild(tr);
}

body.appendChild(table);
