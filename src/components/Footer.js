import "./Footer.scss";

function Footer () {
  return (
    <div className="footer">
      <img className="footer__header" src="./images/footerHead.png" alt="Header"/>
        <div className="footer__socials">
          <img className="footer__social" src="./images/footerTW.png" alt="Twitter Icon"/>
          <img className="footer__social" src="./images/footerFB.png" alt="Facebook Icon"/>
          <img className="footer__social" src="./images/footerIG.png" alt="Instagram Icon"/>
        </div>

        <div className="footer__socialLinks">
          <a className="footer__socialLink" href="/">Download</a>
          <a className="footer__socialLink" href="/">Support</a>
          <a className="footer__socialLink" href="/">Developers</a>
          <a className="footer__socialLink" href="/">Privacy</a>
        </div>
    </div>
  )
};

export default Footer;