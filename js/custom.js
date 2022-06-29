/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

const burger = document.querySelector('.navbar-toggler-icon');
const show = document.querySelector('.navbar-collapse.collapse');
const links = document.querySelectorAll('.nav-link');

links.forEach((item) => {
  item.addEventListener('click', () => {
    show.classList.remove('show');
  });
});
burger.addEventListener('click', () => {
  show.classList.toggle('show');
});

$(function () {
  'use strict';

  setTimeout(function () {
    $('.loader_bg').fadeToggle();
  }, 1500);
});
