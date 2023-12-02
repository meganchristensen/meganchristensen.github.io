import aboutImage from '../assets/img/about.jpg'
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';

const AboutPage = () => {
  return (
      <section id="about" className="about">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Hi, I'm Megan! I am currently a student at Utah State University and am excited for any opportunity where I can build my web development skills. I love to travel and explore the world and learn about all the amazing people and cultures. My favorite part of traveling is seeing all the beautiful and unique architecture.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src={aboutImage} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Front End Web Developer</h3>
              <p className="fst-italic">Student at Utah State University</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Phone:</strong> 435 &#183; 213 &#183; 6851
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>City:</strong> Logan, Utah, USA
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Email:</strong> megan.christensen01@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Degree:</strong> Undergraduate
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Major:</strong> Information Systems
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Minor:</strong> Data Analytics
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I will be graduating in the Fall of 2024 and am excited to help
                clients create and improve their web presence. I love to explore
                colors and layouts to create beautiful pages. I believe that
                everyone can reflect their personality and brand through their
                website design.
              </p>
            </div>
          </div>
        </div>
        <Skills />
        <div class="section-title">
          <h2>Let's Connect!</h2>
          <p>
            Feel free to reach out if you have any questions about me or to just
            say hi :&#41;
          </p>
        </div>

        <div className="row mt-5">

          <div className="col-lg-6">
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

          
        </div>
      </section>
  );
};

export default AboutPage;
