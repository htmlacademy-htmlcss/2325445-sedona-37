let openButton = document.querySelector('.open-modal-search');
let closeButton = document.querySelector('.modal-close-button');
let dialog = document.querySelector('.modal-search');

openButton.onclick = function () {
  dialog.showModal();
};

closeButton.onclick = function () {
  dialog.close();
};
