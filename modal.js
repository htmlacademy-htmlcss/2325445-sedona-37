// Находим модальное окно
let dialog = document.querySelector('.modal-search');
// Находим все кнопки на странице, по которым должно открываться модальное окно
let openButtons = document.querySelectorAll('.open-modal-search, .search-button');
// Находим кнопку закрытия модального окна
let closeButton = document.querySelector('.modal-close-button');

// Открытие модального окна по клику на кнопку
for (let openButton of openButtons) {
  openButton.onclick = function () {
    dialog.showModal();
  };
}

// Закрытие модального окна по клику на кнопку
closeButton.onclick = function () {
  dialog.close();
};

// Закрытие модального окна по клику на backdrop
dialog.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
      event.currentTarget.close()
  }
})
