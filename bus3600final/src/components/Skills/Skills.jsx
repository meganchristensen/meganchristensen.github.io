const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Additional skills are listed in my resume.</p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                React <i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                Tableau <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                SQL <i className="val">65%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Python <i className="val">45%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '45%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
