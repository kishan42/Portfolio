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
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a
                    href="https://www.facebook.com/share/1E1jjX49Eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook profile"
                    className="hover-anim"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://github.com/kishan42"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="hover-anim"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://www.linkedin.com/in/kishan-kachhadiya-6677b9204/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="hover-anim"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://www.instagram.com/kishan.kachhadiya._?igsh=MXF6Y21nYWl0azR4dg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile"
                    className="hover-anim"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
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
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
