let handler = document.querySelector('.movimiento');
let target = document.querySelector('.logo');
handler.addEventListener('click', element => {
  target.classList.toggle('moveToRight')
})