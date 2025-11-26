'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const posts = [
  {
    title: 'Explore Generative AI with the Gemini API in Vertex AI',
    href: 'https://medium.com/@kishankachhadiya823/explore-generative-ai-with-the-gemini-api-in-vertex-ai-4794e6f0c0d9',
    tag: 'Vertex AI | Gemini API',
    image: '/assets/imgs/blog/1.jpg',
  },
  {
    title: 'Inspect Rich Documents with Gemini Multimodality & Multimodal RAG',
    href: 'https://medium.com/@kishankachhadiya823/inspect-rich-documents-with-gemini-multimodality-and-multimodal-rag-5045da89be32',
    tag: 'Multimodal RAG | Gemini',
    image: '/assets/imgs/blog/2.jpg',
  },
  {
    title: 'Building Generative AI Apps with Gemini and Streamlit',
    href: 'https://medium.com/@kishankachhadiya823/building-generative-ai-apps-with-gemini-and-streamlit-a-hands-on-journey-d29e395d77af',
    tag: 'Streamlit | Prototyping',
    image: '/assets/imgs/blog/3.jpg',
  },
  {
    title: 'Exploring Generative AI with Google Cloud: Vertex AI Labs',
    href: 'https://medium.com/@kishankachhadiya823/exploring-generative-ai-with-google-cloud-a-journey-through-vertex-ai-labs-080c28f1f26a',
    tag: 'Google Cloud | Vertex AI',
    image: '/assets/imgs/blog/1.jpg',
  },
  {
    title: 'Mastering Prompt Design in Vertex AI',
    href: 'https://medium.com/@kishankachhadiya823/mastering-prompt-design-in-vertex-ai-a-deep-dive-into-googles-generative-ai-labs-63feeee43c10',
    tag: 'Prompt Design | Labs',
    image: '/assets/imgs/blog/2.jpg',
  },
];

function Blog() {
  const swiperOptions = {
    modules: [Navigation],
    speed: 700,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1.1,
    navigation: {
      nextEl: '.blog-swiper-nav .swiper-button-next',
      prevEl: '.blog-swiper-nav .swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1.5 },
      900: { slidesPerView: 2.3 },
      1200: { slidesPerView: 3 },
    },
  };

  return (
    <section id="blog" className="blog style2">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Medium Blogs</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Latest <span className="fw-200">Stories.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto blog-swiper-nav swiper-arrow-control">
              <div className="swiper-button-prev" aria-label="Previous blog">
                <span className="ti-arrow-left"></span>
              </div>
              <div className="swiper-button-next" aria-label="Next blog">
                <span className="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper blog-swiper" data-carousel="swiper">
          <Swiper
            {...swiperOptions}
            id="blog-swiper-container"
            className="swiper-container"
            data-swiper="container"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.href}>
                <div className="item">
                  <div className="info sub-title p-color d-flex align-items-center mb-20">
                    <div>
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        By : Kishan Kachhadiya
                      </a>
                    </div>
                    <div className="ml-30">
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {post.tag}
                      </a>
                    </div>
                  </div>
                  <div className="img fit-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="cont pt-30">
                    <h5>{post.title}</h5>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="butn-crev d-flex align-items-center mt-30"
                    >
                      <span className="hover-this">
                        <span className="circle hover-anim">
                          <i className="ti-arrow-top-right"></i>
                        </span>
                      </span>
                      <span className="text">Read more on Medium</span>
                    </a>
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

export default Blog;
