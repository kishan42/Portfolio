import React from 'react';

function Services() {
  return (
    <section id="services" className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a href="#services" className="butn butn-sm butn-bord radius-30">
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>Applied Machine Learning</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Python</span>
                </div>
                <p>
                  I build end-to-end ML pipelines, from data preprocessing to model
                  training and evaluation, tailored to real-world problems.
                </p>
              </div>
              <a href="#contact" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>NLP & Conversational AI</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">NLP</span>
                  <span className="tag">LLMs</span>
                </div>
                <p>
                  I design and develop multilingual chatbots, RAG systems, and text
                  intelligence solutions for search, Q&amp;A, and automation.
                </p>
              </div>
              <a href="#contact" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>MLOps & Deployment</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">MLOps</span>
                  <span className="tag">Deployment</span>
                </div>
                <p>
                  I take models from notebooks to production with scalable APIs,
                  monitoring, and CI/CD for robust, reliable AI services.
                </p>
              </div>
              <a href="#contact" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
