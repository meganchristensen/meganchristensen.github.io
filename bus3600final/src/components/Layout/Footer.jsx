const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container d-flex justify-content-center">
          <div className="credits">
            Megan Christensen 
            <a href="https://bootstrapmade.com/" target="blank">
              BootstrapMade
            </a>
            {/* JavaScript Date Page Updated  */}
            <p id="dateupdate"></p>
            <script src="../../assets/js/dateupdate.js"></script>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
