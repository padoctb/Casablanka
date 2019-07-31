import Slideout from 'slideout'
import $ from 'jquery'

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


// OUR WORK IMAGES
const workTypes = document.querySelector('.our-work__types');
let activeType = workTypes.children[0]
const images = document.querySelector('.our-work__images')

workTypes.addEventListener('click', (e) => {
  const workType = e.target
  if (workType.getAttribute('data-type') && workType !== activeType) {
    activeType.classList.remove('our-work__type-active')
    workType.classList.add('our-work__type-active')
    activeType = workType

    const imagesArray = [...images.children]

    imagesArray.forEach((type) => {
      if (type.getAttribute('data-image-type') !== activeType.getAttribute('data-type')) {
        $(type).hide(500)
      }
      if (type.getAttribute('data-image-type') === activeType.getAttribute('data-type')) {
        $(type).show(500)
      }
      if (activeType.getAttribute('data-type') === 'all') {
        $(type).show(500)
      }
    })
  }
})

// VIDEO CONTROL

const playBtn = document.querySelector('.video-section__play-btn');
const video = document.getElementById('video-section__video')

playBtn.addEventListener('click', () => {
  playBtn.classList.add('active')
  video.play()
  setTimeout(() => { playBtn.style.display = 'none' }, 500)
})
