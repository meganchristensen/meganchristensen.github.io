import resume from "../../assets/resume1.pdf";

const Header = () => {
  const currentPath = window.location.pathname;

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="logo me-auto me-lg-0">
            <a href="/">Megan</a>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className={currentPath === "/" ? "active" : ""} href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className={currentPath === "/about" ? "active" : ""}
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={currentPath === "/contact" ? "active" : ""}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="header-social-links">
            <a
              href="https://www.linkedin.com/in/meganchristensen123/"
              className="linkedin"
              target="_blank"
              style={{ fontSize: '20px' }} 

            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:megan.christensen01@gmail.com" className="email" style={{ fontSize: '20px' }} 
>
              <i className="bi bi-envelope"></i>
            </a>
            <a
              href="https://www.facebook.com/megan.christensen.1088/"
              className="facebook"
              target="_blank"
              style={{ fontSize: '20px' }} 
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/megan.c.hristensen/"
              className="instagram"
              target="_blank"
              style={{ fontSize: '20px' }} 

            >
              <i className="bi bi-instagram"></i>
            </a>
            {/* <form
              id="form"
              role="search"
              method="get"
              action="https://www.google.com/search"
              target="_blank"
            >
              <input
                type="search"
                id="query"
                placeholder="Search Google"
                name="q"
              />
              <button id="btnsearch">Search</button>
            </form> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
