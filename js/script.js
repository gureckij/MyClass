/* Элементы кнопок-переключателей раскладки */
let tileViewButton = document.querySelector('.card-view-tile');
let standardViewButton = document.querySelector('.card-view-standard');

/* Элемент списка карточек */
let cardsList = document.querySelector('.cards');

tileViewButton.onclick = function () {
    /* Код переключения раскладки */
    cardsList.classList.remove('standard');
    standardViewButton.classList.remove('active');
    tileViewButton.classList.add('active');
};
