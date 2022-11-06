new Swiper('.swiper',{
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsBlock = document.querySelectorAll('.tabs__block');


tabsBtn.forEach(function(element) {
  element.addEventListener('click', function() {
    let currentBtn = element;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function(element) {
      element.classList.remove('tabs__btn--active');
    });

    tabsBlock.forEach(function(element) {
      element.classList.remove('tabs__block--active');
    });

    currentBtn.classList.add('tabs__btn--active');
    currentTab.classList.add('tabs__block--active');

    });
});



$(function() {
  $('.questions__list').accordion({

    heghtStyle:'content',
    collapsible:true,
    active:false,

  });
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const navMenu = document.querySelectorAll('a');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  menu.classList.toggle('animate__fadeInLeftBig');
  document.body.classList.toggle('stop-scroll');

});

navMenu.forEach(el => {

  el.addEventListener('click', () => {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  });
});

const searchOpen = document.querySelector('.header__btn-search');
const search = document.querySelector('.search');
const searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click',() => {

  search.classList.toggle('search--active');

});

searchClose.addEventListener('click', () => {

  search.classList.remove('search--active');

});

const form = document.querySelector(".form");
					const selector = form.querySelector("input[type='tel']");
					const inputMask = new Inputmask("+7 (999) 999 99 99");
		inputMask.mask(selector);

		new window.JustValidate('.form', {
			rules: {
				name: {
					required: true,
					minLength: 2,
					maxLength: 10,
				},

				tel: {
					required: true,
					function: () => {
						const phone = selector.inputmask.unmaskedvalue();
						return Number(phone) && phone.length === 10;
					},
				},

        text: {
          required: false,
        },
			},
			colorWrong: '#FF5C00',
			messages: {
				name: {
					required: 'Вы не ввели имя',
					minLength: 'Введите больше 2ух символов',
					maxLength: 'Введите меньше 10ти символов'
				},
				tel: {
					required: 'Вы не ввели телефон',
					function: 'Введите правильное колличество символов'
				},

			},
		});



