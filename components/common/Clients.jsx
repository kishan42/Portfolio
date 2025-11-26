'use client';
import React from 'react';

const experience = [
  {
    company: 'IRLP Lab, DAIICT',
    title: 'Jr. Computer Scientist',
    location: 'Gandhinagar, India',
    dates: 'Nov, 2024 – Present',
    bullets: [
      'Trained the NLLB 3.3B model on 22 Indian language government and health datasets to advance multilingual NLP and cross-lingual accessibility.',
      'Improved text retrieval and translation accuracy across Gujarati, English, Bengali, and Kannada by fine-tuning Bi-Encoder, BM25, and ColBERT on MS MARCO and FIRE benchmarks.',
      'Built hierarchical embeddings (clauses, sections, summary) and applied RAG to deliver a legal Q&A bot with accurate semantic and referential query handling.',
    ],
    tags: ['NLP', 'LLMs', 'RAG', 'Fine-tuning'],
  },
  {
    company: 'Fitshield',
    title: 'Jr. Data Scientist (Freelance)',
    location: 'Surat, India',
    dates: 'Sep, 2024 – Nov, 2024',
    bullets: [
      'Generated structured dish data via prompting to identify ingredients and map accurate nutritional values.',
      'Retrieved appropriate nutritional values based on ingredient quantities, boosting dietary info accuracy.',
      'Implemented RAG with vector embeddings for semantic dish name search and efficient retrieval.',
    ],
    tags: ['FastAPI', 'Prompt Engineering', 'Python', 'RAG', 'VectorDB'],
  },
  {
    company: 'Rootle.AI',
    title: 'Machine Learning Intern',
    location: 'Ahmedabad, India',
    dates: 'Dec, 2023 – Jun, 2024',
    bullets: [
      'Performed EDA, visualization, and feature engineering; improved user engagement by 3–6% through tuned classification and clustering models.',
      'Fine-tuned Gemma3 with PEFT (LoRA), lifting accuracy from 77% to 83%, and explored advanced NLP, LangChain, and RAG techniques.',
    ],
    tags: ['Python', 'Pandas', 'sklearn', 'Deep Learning', 'LoRA'],
  },
  {
    company: 'SAP - Code Unnati Program',
    title: 'Data Science Trainee',
    location: 'Vadodara, India',
    dates: 'Feb, 2022 – Feb, 2023',
    bullets: [
      'Completed hands-on training in AI and IoT under the Code Unnati Program, a SAP & Edunet initiative for Industry 4.0 skills.',
      "Delivered capstone project 'MOODMATE' using machine learning and deep learning.",
    ],
    tags: ['AI', 'IoT', 'Python', 'Machine Learning'],
  },
];

function Clients() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="sec-head text-center mb-60">
              <h3 className="fw-600">Experience & Collaborations</h3>
              <p className="opacity-7 mt-10">
                A snapshot of companies and teams I&apos;ve partnered with across NLP, data science, and
                applied AI.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {experience.map((item) => (
            <div className="col-lg-6 mb-40" key={`${item.company}-${item.dates}`}>
              <div className="item p-30 radius-15 main-bg">
                <div className="d-flex align-items-center mb-15">
                  <div>
                    <h5 className="mb-5">{item.company}</h5>
                    <div className="sub-title p-color">
                      {item.title} • {item.location}
                    </div>
                  </div>
                  <span className="ml-auto text-uppercase fz-12 opacity-7">{item.dates}</span>
                </div>
                <ul className="rest list-unstyled mb-20">
                  {item.bullets.map((point) => (
                    <li className="mb-10" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span className="butn butn-sm butn-bord radius-30 mr-10 mb-10" key={tag}>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
