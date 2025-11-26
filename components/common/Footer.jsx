import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                Gandhinagar, Gujarat, <br /> India
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:kishankachhadiya823@gmail.com">
                  kishankachhadiya823@gmail.com
                </a>
              </h6>
              <a href="tel:+919328308575" className="underline">
                <span className="fz-22 main-color">+91 9328308575</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="#about">About</a>
                </li>
                <li className="mb-15">
                  <a href="#services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Project Inquiry</h6>
              <form
                action="mailto:kishankachhadiya823@gmail.com"
                method="post"
                encType="text/plain"
                className="form-group mb-40 d-flex align-items-center"
                style={{ gap: '12px' }}
              >
                <input
                  type="text"
                  name="message"
                  placeholder="Your project inquiry"
                  required
                  style={{ flex: 1, paddingRight: '42px', minHeight: '44px' }}
                />
                <button
                  type="submit"
                  style={{
                    minWidth: '44px',
                    height: '44px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="ti-location-arrow"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
        <div className="text-center">
          <p className="fz-14">
            (c) 2025 Kishan Kachhadiya. No bugs, just happy accidents.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
}

export default Footer;
