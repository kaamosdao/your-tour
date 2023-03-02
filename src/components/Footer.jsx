import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Наши социальные сети</p>
        <ul className="footer__socials">
          <li className="footer__socials-item footer__socials-item--instagram">
            <a className="footer__socials-link" href="#">
              instagram
            </a>
          </li>
          <li className="footer__socials-item footer__socials-item--facebook">
            <a className="footer__socials-link" href="#">
              facebook
            </a>
          </li>
          <li className="footer__socials-item footer__socials-item--vkontakte">
            <a className="footer__socials-link" href="#">
              vkontakte
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
