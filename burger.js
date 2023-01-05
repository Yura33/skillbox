document.addEventListener('DOMContentLoaded', () => {

  const btnBurger = document.querySelector('.header__burger');
  const headerNavList = document.querySelector('.header__list');

  btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    headerNavList.classList.toggle('active');
  });

})
