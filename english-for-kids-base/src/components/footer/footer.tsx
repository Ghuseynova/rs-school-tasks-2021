import React from 'react';

import './footer.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer container">
      <a href="https://github.com/Ghuseynova" className="footer__link footer__link--github">
        <img src={`${process.env.PUBLIC_URL}/static/images/github-icon.svg`} alt="github" />
      </a>
      <p className="footer__copyright">Made in 2021</p>
      <a href="https://rs.school/js/" className="footer__link footer__link--rs-school">
        <img src={`${process.env.PUBLIC_URL}/static/images/rs_school_js.svg`} alt="github" />
      </a>
    </footer>
  );
};

export default Footer;
