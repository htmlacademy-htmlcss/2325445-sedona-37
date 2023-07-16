let openButtons = document.querySelectorAll('.open-modal-search, .search-button');
let closeButton = document.querySelector('.modal-close-button');
let dialog = document.querySelector('.modal-search');

console.log(openButtons);
for (let openButton of openButtons) {
  openButton.onclick = function () {
    dialog.showModal();
  };
}


closeButton.onclick = function () {
  dialog.close();
};
