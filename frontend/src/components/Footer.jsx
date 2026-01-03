import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <h3>Thimasha Thakshali</h3>
          <p>Software Engineer</p>
        </div>

        <div className="footer-center">
          <p>Email:</p>
          <a href="mailto:ugthimashath@gmail.com">
            ugthimashath@gmail.com
          </a>
        </div>

        <div className="footer-right">
          <a
            href="https://github.com/ThimashaThakshali"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Thimasha Thakshali. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
