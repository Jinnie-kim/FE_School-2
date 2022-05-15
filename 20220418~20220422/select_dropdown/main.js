'use strict';

const selectButton = document.querySelector('.selectbox__button');
const selectListBox = document.querySelector('.selectbox__list');
const selectListButton = document.querySelectorAll('.list_button');

selectButton.addEventListener('click', () => {
    selectListBox.classList.remove('hide');
})

selectButton.addEventListener('blur', () => {
    selectListBox.classList.add('hide');
})


selectListBox.forEach((item) => {
    item.addEventListener('click', () => {
        const language = item.textContent.trim();
        selectButton.innerText = language;
    })
})
