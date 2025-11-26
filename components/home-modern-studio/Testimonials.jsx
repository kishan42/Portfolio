'use client';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
  {
    title: 'AI & Data Quality',
    quote:
      'Kishan transformed our messy recipe data into structured, searchable nutrition in weeks. The RAG pipeline he built now powers accurate meal suggestions for our users.',
    name: 'Rahul Virani',
    role: 'Founder, Fitshield',
    img: '',
  },
  {
    title: 'Multilingual NLP',
    quote:
      'He fine-tuned NLLB and retrieval models across 22 Indic languages for our legal RAG workbench. The uplift in cross-lingual accuracy has been remarkable.',
    name: 'Dr. Prasenjit Majumder',
    role: 'Lead Researcher, IRLP Lab',
    img: '',
  },
  {
    title: 'Product Analytics',
    quote:
      'From EDA to shipping a LoRA-tuned Gemma model, Kishan helped us lift engagement 3–6% and ship recommendations faster. Great partner for applied ML.',
    name: 'Rahul Desai',
    role: 'Sales Head',
    img: '',
  },
];

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 'auto' },
    },
    navigation: {
      nextEl: '.testim-modern .swiper-button-next',
      prevEl: '.testim-modern .swiper-button-prev',
    },
  };

  return (
    <section
      id="testimonials"
      className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd"
    >
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Testimonials</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Trusted <span className="fw-200">by Clients.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} style={{ height: '100%' }}>
                <div
                  className="item"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '420px',
                  }}
                >
                  <div className="cont" style={{ flex: 1 }}>
                    <h6 className="sub-title mb-15">{item.title}</h6>
                    <div className="text">
                      <p>{item.quote}</p>
                    </div>
                  </div>
                  <div className="info" style={{ marginTop: 'auto' }}>
                    <div className="d-flex align-items-center">
                      <div className="ml-0">
                        <h6 className="fz-18">{item.name}</h6>
                        <span className="p-color opacity-8 fz-15 mt-5">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
