let sentAnswer = document.querySelector('.question__send ');
let choices = document.querySelectorAll('.question__choices-answer');
let corrctA = document.getElementById('b');
// console.log(choices);

//when chooce the answer
for (var i = 0 ; i < choices.length; i++) {

choices[i].addEventListener('click', function(){
  // funclink(event);
  let choice = document.querySelectorAll('.question__choices-answer');
  for (var i = 0 ; i < choice.length; i++) {
        choice[i].className = choice[i].className.replace(" show","");
}
event.currentTarget.className += " show";
})
}

//after chooce the answer and click send will check if answer in correct or not
sentAnswer.addEventListener('click', function(){
  let show = document.getElementsByClassName('show');

  if(corrctA.classList.contains('show')){
    alert('Great, It is correct');
  }else{
    alert('Wrong answer!');
  }
});