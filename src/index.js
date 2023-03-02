import ReactDOM from 'react-dom/client';
import init from './init.jsx';
import './scss/style.scss';

const render = () => {
  window.addEventListener('scroll', () => {
    const distance = 450;
    const fixedheader = document.querySelector('.header-fixed');
    if (window.scrollY >= distance) {
      fixedheader.classList.add('header-fixed--show');
    } else {
      fixedheader.classList.remove('header-fixed--show');
    }
  });

  const root = ReactDOM.createRoot(document.querySelector('#root'));
  const App = init();
  root.render(App);
};

render();
