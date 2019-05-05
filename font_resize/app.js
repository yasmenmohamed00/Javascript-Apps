const medium = document.querySelector('.medium-size');
const orginal= document.querySelector('.orginal-size');
const bigger= document.querySelector('.bigger-size');

const block = document.querySelector('.block');
//  console.log(block);
medium.addEventListener('click', mediumSize);
orginal.addEventListener('click', orginalSize);
bigger.addEventListener('click', bigSize);

function mediumSize() {
    block.style.fontSize = '15px';
    block.style.transition = "all .8s";
}
function orginalSize(){
    block.style.fontSize = '10px';
}
function  bigSize (){
    block.style.fontSize = '20px';
}