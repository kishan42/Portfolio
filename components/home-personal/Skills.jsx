import React from 'react';

function Skills() {
  return (
    <section id="skills" className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                We&apos;re proud to work with <br />a
                <span className="opacity-7">diverse range of companies.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s1.png" alt="" />
                </div>
                <span className="value">95%</span>
              </div>
              <h6 className="fz-18">Python Development</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s2.png" alt="" />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">Machine Learning</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s3.png" alt="" />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">Deep Learning</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s5.png" alt="" />
                </div>
                <span className="value">84%</span>
              </div>
              <h6 className="fz-18">NLP</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s4.png" alt="" />
                </div>
                <span className="value">78%</span>
              </div>
              <h6 className="fz-18">MLOps & Deployment</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s6.png" alt="" />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">Generative Ai</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
