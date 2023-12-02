import aboutImage from "../assets/img/about.jpg";
import Skills from "../components/Skills/Skills";

const ContactPage = () => {
  return (
    <section id="contact" class="contact">
      <div class="container justify-content-center" data-aos="fade-up">
        <div class="section-title">
          <h2>Let's Connect!</h2>
          <p>
            Feel free to reach out if you have any questions about me or to just
            say hi :&#41;
          </p>
        </div>

        <div className="row mt-5 justify-content-center">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-linkedin"></i>
                <h4>LinkedIn:</h4>
                <p>
                  <a
                    href="https://www.linkedin.com/in/meganchristensen123/"
                    className="linkedin"
                    target="_blank"
                  >
                    meganchristensen123
                  </a>
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>megan.christensen01@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 435 213 6851</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf9zUfUgTo4-h_sVxs7Ny384yrABXnupfEoamDX7OKrpj6ANg/viewform?embedded=true"
              width="640"
              height="381"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
