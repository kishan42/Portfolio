'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section id="portfolio" className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="#portfolio"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
            <div className="card-item sub-bg">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        <a href="#portfolio" className="tag">
                          Retrieval
                        </a>
                        <a href="#portfolio" className="tag">
                          LLMs
                        </a>
                      </div>
                      <h4>Cross-Lingual Math Retrieval (FIRE 2025)</h4>
                    </div>
                    <div>
                      <p>
                        Built an English–Hindi mathematical information retrieval system
                        that ranked 1st at FIRE 2025, enabling accurate cross-lingual search
                        over complex math content.
                      </p>
                      <a href="#contact" className="underline mt-15">
                        <span className="text main-color sub-title">
                          View Details <i className="ti-arrow-top-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src="/assets/imgs/works/1/1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-item sub-bg">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        <a href="#portfolio" className="tag">
                          GenAI
                        </a>
                        <a href="#portfolio" className="tag">
                          Text-to-Image
                        </a>
                      </div>
                      <h4>Multilingual Story-to-Image Generation</h4>
                    </div>
                    <div>
                      <p>
                        Developed a pipeline that turns English and Hindi narratives into
                        culturally relevant illustrations, achieving 1st rank in both tracks
                        at FIRE 2025.
                      </p>
                      <a href="#contact" className="underline mt-15">
                        <span className="text main-color sub-title">
                          View Details <i className="ti-arrow-top-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src="/assets/imgs/works/1/2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-item sub-bg">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        <a href="#portfolio" className="tag">
                          Audio AI
                        </a>
                        <a href="#portfolio" className="tag">
                          Deep Learning
                        </a>
                      </div>
                      <h4>Deepfake Audio Detection (S4P 2025)</h4>
                    </div>
                    <div>
                      <p>
                        Fine-tuned Whisper-large on multilingual data to detect deepfake
                        audio, improving F1 score and securing 3rd place at S4P 2025.
                      </p>
                      <a href="#contact" className="underline mt-15">
                        <span className="text main-color sub-title">
                          View Details <i className="ti-arrow-top-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src="/assets/imgs/works/1/5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-item sub-bg">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        <a href="#portfolio" className="tag">
                          NLP
                        </a>
                        <a href="#portfolio" className="tag">
                          RAG
                        </a>
                      </div>
                      <h4>Multilingual Legal Q&amp;A Bot</h4>
                    </div>
                    <div>
                      <p>
                        Designed hierarchical embeddings and RAG over complex legal
                        documents to answer semantic and referential queries across multiple
                        Indian languages.
                      </p>
                      <a href="#contact" className="underline mt-15">
                        <span className="text main-color sub-title">
                          View Details <i className="ti-arrow-top-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src="/assets/imgs/works/1/6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-item sub-bg">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        <a href="#portfolio-grid" className="tag">
                          MLOps
                        </a>
                        <a href="#portfolio-grid" className="tag">
                          Flask
                        </a>
                      </div>
                      <h4>Diamond Price Prediction Pipeline</h4>
                    </div>
                    <div>
                      <p>
                        Built an end-to-end MLflow-powered MLOps pipeline and deployed a
                        regression model via Flask for real-time diamond price prediction.
                      </p>
                      <a href="#project-details" className="underline mt-15">
                        <span className="text main-color sub-title">
                          View Details <i className="ti-arrow-top-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src="/assets/imgs/works/1/3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Flipkart Product Review Scraper */}
            <div className="card-item sub-bg">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        <a href="#portfolio" className="tag">
                          Flask
                        </a>
                        <a href="#portfolio" className="tag">
                          Web Scraping
                        </a>
                      </div>
                      <h4>Flipkart Product Review Scraper App</h4>
                    </div>
                    <div>
                      <p>
                        Developed a Flask app that scrapes purchased product reviews from
                        Flipkart, shows top reviews in the web UI, saves data per product in
                        CSV, downloads images, and stores user accounts &amp; search history
                        in an SQL database.
                      </p>
                      <a href="#project-details" className="underline mt-15">
                        <span className="text main-color sub-title">
                          View Details <i className="ti-arrow-top-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src="/assets/imgs/works/1/4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI News Article Extractor Agent */}
            <div className="card-item sub-bg">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        <a href="#portfolio" className="tag">
                          Streamlit
                        </a>
                        <a href="#portfolio" className="tag">
                          GenAI &amp; LangChain
                        </a>
                      </div>
                      <h4>AI News Article Extractor Agent</h4>
                    </div>
                    <div>
                      <p>
                        Built an AI agent that scrapes news articles from URLs, extracts
                        structured metadata, stores it in Airtable, and triggers automated
                        email alerts for trade-related news.
                      </p>
                      <a href="#project-details" className="underline mt-15">
                        <span className="text main-color sub-title">
                          View Details <i className="ti-arrow-top-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src="/assets/imgs/works/1/7.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
