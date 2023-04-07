import '../scss/style.scss'
import { Swiper, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.scss'

const buttonBurger = document.querySelector('.header__img-menu')
const buttonsClose = document.querySelectorAll('.menu__img-close')
const buttonsChat = document.querySelectorAll('.header__img-chat')
const buttonsCall = document.querySelectorAll('.header__img-call')

const menu = document.querySelector('.menu--closed')
const menuFeedback = document.querySelector('.menu-feedback--closed')
const background = document.querySelector('.container-background--hidden')

const inputName = document.querySelector('input[name=name]')
const inputEmail = document.querySelector('input[name=email]')
const inputText = document.querySelector('textarea[name=text]')
const feedbackName = document.querySelector(
  '.menu-feedback__heading:first-child'
)
const callName = document.querySelector('.menu-feedback__heading:last-child')
const onWardsButtons = document.querySelectorAll('.about-company__onwards')
const containerText = document.querySelectorAll('.about-company__text')
const containerBrands = document.querySelector('.brands__list')
const containerTypes = document.querySelector(
  '.types-of-product ul, .brands-list'
)

buttonBurger.addEventListener('click', burgerClick)
background.addEventListener('click', backgroundClick)

function burgerClick() {
  menu.classList.remove('menu--closed')
  menu.classList.add('menu')
  menuFeedback.classList.add('menu-feedback--closed')
  menuFeedback.classList.remove('menu-feedback')
  background.classList.remove('container-background--hidden')
  background.classList.add('container-background')
}

buttonsClose.forEach((buttonClose) => {
  buttonClose.addEventListener('click', closeClick)
  function closeClick() {
    menu.classList.add('menu--closed')
    menu.classList.remove('menu')
    menuFeedback.classList.remove('menu-feedback')
    menuFeedback.classList.add('menu-feedback--closed')
    background.classList.remove('container-background')
    background.classList.add('container-background--hidden')
  }
})

buttonsChat.forEach((buttonChat) => {
  buttonChat.addEventListener('click', chatClick)
  function chatClick() {
    menu.classList.remove('menu')
    menu.classList.add('menu--closed')
    menuFeedback.classList.remove('menu-feedback--closed')
    menuFeedback.classList.add('menu-feedback')
    background.classList.remove('container-background--hidden')
    background.classList.add('container-background')
    inputName.removeAttribute('hidden')
    inputEmail.removeAttribute('hidden')
    inputText.removeAttribute('hidden')
    feedbackName.removeAttribute('hidden')
    callName.setAttribute('hidden', 'hidden')
  }
})

buttonsCall.forEach((buttonCall) => {
  buttonCall.addEventListener('click', callClick)
  function callClick() {
    menu.classList.remove('menu')
    menu.classList.add('menu--closed')
    menuFeedback.classList.remove('menu-feedback--closed')
    menuFeedback.classList.add('menu-feedback')
    background.classList.remove('container-background--hidden')
    background.classList.add('container-background')
    inputName.setAttribute('hidden', 'hidden')
    inputEmail.setAttribute('hidden', 'hidden')
    inputText.setAttribute('hidden', 'hidden')
    callName.removeAttribute('hidden')
    feedbackName.setAttribute('hidden', 'hidden')
  }
})

function backgroundClick() {
  background.classList.remove('container-background')
  background.classList.add('container-background--hidden')
  menu.classList.remove('menu')
  menu.classList.add('menu--closed')
  menuFeedback.classList.remove('menu-feedback')
  menuFeedback.classList.add('menu-feedback--closed')
}

onWardsButtons.forEach((onWardsButton, index) => {
  if (index === 0) {
    onWardsButton.addEventListener('click', onWardsClick)
    function onWardsClick() {
      onWardsButton.classList.toggle('about-company__onwards--return')
      containerText.forEach((text) => {
        text.classList.toggle('about-company__text--opened')
      })
      if (onWardsButton.innerHTML === 'Свернуть') {
        onWardsButton.innerHTML = 'Читать далее'
      } else {
        onWardsButton.innerHTML = 'Свернуть'
      }
    }
  }

  if (index === 1) {
    onWardsButton.addEventListener('click', onWardsClick)
    function onWardsClick() {
      onWardsButton.classList.toggle('about-company__onwards--return')
      containerBrands.classList.toggle('brands__list--opened')
      if (onWardsButton.innerHTML === 'Свернуть') {
        onWardsButton.innerHTML = 'Показать все'
      } else {
        onWardsButton.innerHTML = 'Свернуть'
      }
    }
  }
  if (index === 2) {
    onWardsButton.addEventListener('click', onWardsClick)
    function onWardsClick() {
      onWardsButton.classList.toggle('about-company__onwards--return')
      containerTypes.classList.toggle('brands__list--opened')
      if (onWardsButton.innerHTML === 'Свернуть') {
        onWardsButton.innerHTML = 'Показать все'
      } else {
        onWardsButton.innerHTML = 'Свернуть'
      }
    }
  }
})

const swiper = new Swiper('.swiper', {
  autoplay: false,
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  initialSlide: 0,
  rewind: true,
  spaceBetween: 16,
  slidesOffsetBefore: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  modules: [Pagination],

  breakpoints: {
    768: {
      enabled: false,
      slidesOffsetBefore: 0,
      spaceBetween: 0
    },
    1150: {
      enabled: false,
      slidesOffsetBefore: 0,
      spaceBetween: 0
    }
  }
})
