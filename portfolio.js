//Fonctionnement de la modal du portfolio
//Ce code utilise la méthode document.querySelectorAll() pour pointer sur tout les bouton de la classe project
//qui ont la classe CSS "project" et les stocke dans une variable appelée buttons.

const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');




function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;

  
}

function close() {
  overlay.classList.remove('open');

}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);


