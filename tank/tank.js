var field = document.querySelector('.field');
var tank = document.createElement('div');
tank.classList.add('tank');
field.appendChild(tank);


var velocity = 1;
var tankLeft = 0;
var tankTop = 0;

window.addEventListener('keydown', function (event) {

    if (event.code === 'ArrowRight') {
        tankLeft += velocity * 2;
        tank.style.left = tankLeft + 'px'
    }
    // moving left

    if (event.code === 'ArrowLeft') {
        tankLeft -= velocity * 2;
        tank.style.left = tankLeft + 'px'
    }

    if (event.code === 'ArrowDown') {
        tankTop += velocity * 2;
        tank.style.top = tankTop + 'px'
    }

    if (event.code === 'ArrowUp') {
        tankTop -= velocity * 2;
        tank.style.top = tankTop + 'px'
    }
})
// window.addEventListener('keydown', function(event){
//     var position = 0;
//     var velocity = 2;
// if (event.code === 'ArrowRight') {
//     position += velocity*2;
//     tank.style.marginLeft = position + 'px';
// }

// if (event.code ===  'ArrowLeft'){
//     position -= velocity*2;
//     tank.style.marginLeft = position + 'px'
//     console.log(position)
// }

// if (event.code === 'ArrowDown'){
//     position += velocity*2;
//     tank.style.marginTop = position + 'px'
//     console.log(position)
// }

// if (event.code === 'ArrowUp'){
//     position -= velocity*2;
//     tank.style.marginTop = position + 'px'
// }

// })
