import Slideout from 'slideout'

// MENU
const slideout = new Slideout({
  panel: document.getElementById('panel'),
  menu: document.getElementById('menu'),
  padding: 256,
  tolerance: 70,
});

const menuButton = document.querySelector('.main-header__menu-btn')

menuButton.addEventListener('click', function openMenu() {
  this.classList.toggle('active')
  slideout.toggle();
});
