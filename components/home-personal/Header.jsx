'use client';
import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const heroSrc = '/assets/imgs/header/p0.jpg';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  return (
    <div
      id="home"
      className="header header-personal valign bg-img"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src={heroSrc}
          alt="Portrait of Kishan Kachhadiya"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>
      <div className="container ontop" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="" />
                </span>{' '}
                Hello! there
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m Kishan <span className="main-color">Kachhadiya</span>
              </h1>
              <h3>I am an AI Engineer</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      From the inception of a project to its completion, we
                      employ a comprehensive and holistic approach.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="#contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">kishankachhadiya823@gmail.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+91 9328308575</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">Gandhinagar, Gujarat, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
