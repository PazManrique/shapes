let reset = document.querySelector('.reset');
let circle = document.querySelector('.circle');
let square = document.querySelector('.square');
let triangle = document.querySelector('.triangle');






circle.addEventListener("click", dissapearCircle);
square.addEventListener("click", dissapearSquare);
triangle.addEventListener("click", dissapearTriangle);

reset.addEventListener('click', function () {

        circle.style.opacity = 1;
        triangle.style.opacity = 1;
        square.style.opacity = 1;

})


function dissapearCircle() {
    circle.style.opacity = 0;
}
function dissapearSquare() {
    square.style.opacity = 0;
}
function dissapearTriangle() {
    triangle.style.opacity = 0;
    
}