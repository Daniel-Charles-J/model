'use strict'

let btnSubmit = document.getElementById("submit");
let btnCancel = document.getElementById("cancel");

let popup = document.getElementById('popup');
let container = document.getElementById('container');

const showModal = function () {
  popup.classList.remove('hide');
  popup.classList.add('show');
}

const hideModal = function () {
  popup.classList.remove('show');
  popup.classList.add('hide');
}