const modal = document.querySelector('#modal-menu');
const hambIcon = document.querySelector('#burguer-icon');
const xIcon = document.querySelector('#x-icon');
const list = document.querySelector('#list-menu');

hambIcon.addEventListener('click', () => {
  modal.style.display = 'block';
});

xIcon.addEventListener('click', () => {
  modal.style.display = 'none';
});

list.addEventListener('click', () => {
  modal.style.display = 'none';
});
