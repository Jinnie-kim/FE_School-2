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


selectListBox.addEventListener('click', (event) => {
    if(event.target.nodeName == 'BUTTON') {
        const language = event.target.textContent.trim();
        selectButton.innerText = language;
    }
})