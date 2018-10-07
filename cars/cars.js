// creating a car
var road = document.querySelector('.road');
var car = document.createElement('div')
car.classList.add('car');
road.appendChild(car);

//moving right
var position = 0;
var velocity = 2;

window.addEventListener('keydown', function (event){

if (event.code === 'ArrowRight' ) {
    position += velocity*2;
    car.style.marginLeft = position + 'px'
} 
// moving left

if (event.code === 'ArrowLeft' ){
    position -= velocity*2
    car.style.marginLeft = position + 'px'
}


})

//don't go outside screen


// function canMoveRight(){
//    return car.offsetLeft + car.clientWidth <= road.clientWidth
// }

// function canMoveLeft(){
//     return car.offsetLeft > road.offsetLeft
// }

