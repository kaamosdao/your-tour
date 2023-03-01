import '../scss/style.scss';

const init = () => {
  window.addEventListener('scroll', () => {
    const distance = 450;
    const fixedheader = document.querySelector('.header-fixed');
    if (window.scrollY >= distance) {
      fixedheader.classList.add('header-fixed--show');
    } else {
      fixedheader.classList.remove('header-fixed--show');
    }
  });
};

init();
