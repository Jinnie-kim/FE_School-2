'use strict';

const selectButton = document.querySelector('.selectbox__button');
const selectListBox = document.querySelector('.selectbox__list');
const selectListButton = document.querySelectorAll('.list_button');

selectButton.addEventListener('click', () => {
    selectListBox.classList.remove('hide');
})



selectListBox.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {
        selectButton.innerText = this.event.target.innerText; // this.event.target.textContent.trim(); 
        selectListBox.classList.add('hide');
    }
});

