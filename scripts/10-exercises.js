// const buttonElement  = document.querySelector('.js-button');

// const hasButton = buttonElement.classList.contains('js-button');

// console.log(hasButton);




function toggled(button){

  const toggleButton = document.querySelector(button);
  if(!toggleButton.classList.contains('is-toggled')){
    turnOffPreviousButton();
    toggleButton.classList.add('is-toggled');
  }
  else 
    {toggleButton.classList.remove('is-toggled');}
}
function turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');

  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}