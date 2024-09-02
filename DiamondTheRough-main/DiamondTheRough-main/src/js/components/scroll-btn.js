document.addEventListener('DOMContentLoaded', () => {
  addScrollBtns();
});

//Добавить скролл по кнопке -----------------------------------------------

function addScrollBtns() {
  const btns = document.querySelectorAll('.cases__scroll-btn');

  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener('click', smoothScrollToTop);
    });
  }
}


function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
