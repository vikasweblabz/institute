import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer
        className="footer bg-light section-pattern footer-bg bg-img"
        style={{
          backgroundImage:
            'url("assets/img/section-pattern/footer-pattern.png")',
        }}
      >
        {/* Footer Top Begin */}
        <div className="footer-top pt-60">
          <div className="container border-bottom">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/* Contact Widget Begin */}
                <div className="widget widget_contact_info">
                  {/* Widget Logo Begin */}
                  <div className="widget-logo">
                    <Link to={"/"}>
                      {" "}
                      <img
                        src="assets/img/logo-1.png"
                        data-rjs={2}
                        alt=""
                        data-rjs-processed="true"
                      />{" "}
                    </Link>
                  </div>
                  {/* Widget Logo End */}
                  {/* Widget Content Begin */}
                  <div className="info-content">
                    <div className="single-info">
                      <span>Office Location</span>
                      <p>
                        344 3rd Floor Shubham Tower Neelam Bata Road Faridabad
                        (Haryana), India
                      </p>
                    </div>
                    <div className="single-info">
                      <span>Business Phone</span>
                      <p>
                        {" "}
                        <a href="tel:+919990013009">
                          +91 - 9990013009 <br /> +91 - 9810418252{" "}
                        </a>
                      </p>
                    </div>
                    <div className="single-info">
                      <span>Support mail</span>
                      <p>
                        <a href="mailto:sales@weblabz.in">sales@weblabz.in</a>
                        <a href="mailto:info@weblabz.in">info@weblabz.in</a>
                      </p>
                    </div>
                  </div>
                  {/* Widget Content End */}
                </div>
                {/* About Widget End */}
              </div>
              <div className="col-lg-3 col-sm-6">
                {/* Widget Recent Post Begin */}
                <div className="widget widget_recent_entries">
                  {/* Widget Title Begin  */}
                  <div className="widget-title">
                    <h4>Our Services</h4>
                  </div>
                  {/* Widget Title End  */}
                  {/* Menu Begin */}
                  <ul className="menu">
                    <li>
                      <Link to={"/digital-marketing"}> Digital Marketing</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/app-development"}> App Development </Link>
                    </li>
                    <li>
                      <Link to={"/web-development"}>
                        {" "}
                        Web Development Services
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/company-profiling"}>Company Profiling </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/logo-designing"}>Logo Desiging </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/media-planning-buying"}>
                        Media planning Buying
                      </Link>
                    </li>
                  </ul>
                  {/* Menu End */}
                </div>
                {/* Widget Recent Post End */}
              </div>
              <div className="col-lg-2 col-sm-6">
                {/* Widget Quick Nav */}
                <div className="widget widget_nav_menu">
                  {/* Widget Title Begin  */}
                  <div className="widget-title">
                    <h4>Quick Links</h4>
                  </div>
                  {/* Widget Title End  */}
                  {/* Menu Begin */}
                  <ul className="menu">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/portfolio"}>Portfolio</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/about-us"}>About Us</Link>
                    </li>

                    <li>
                      <Link to={"/hosting"}>Hosting</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                    {/* <li>Blog</li> */}
                  </ul>
                  {/* Menu End */}
                </div>
                {/* Widget Quick Nav */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Widget Newsletter Begin */}
                <div className="widget widget_newsletter">
                  {/* Widget Title Begin  */}
                  <div className="widget-title">
                    <h4>Profile</h4>
                  </div>
                  {/* Widget Title End  */}
                  <div className="newsletter-content">
                    <p>
                      WebLabz Technologies is a 24x7 working IT agency,
                      headquartered at Faridabad - one of the Smart Cities and
                      IT Hubs of India.
                    </p>
                  </div>
                </div>
                {/* Widget Newsletter End */}
                {/* Widget Social Icon Begin */}
                <div className="widget widget_social_icon">
                  <ul className="social_icon_list list-inline">
                    <li>
                      <a href="https://www.facebook.com/weblabz01/">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/weblabz-it-67885191/">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/web.labz/">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Widget Social Icon End */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Top End */}
        {/* Footer Bottom Begin */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-text text-center">
                  <span>
                <Link to={'/'}>    <a href="#">WebLabz Technologies</a>  </Link>© Copyright 2022.All
                    rights reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="back-to-top position-fixed show">
          <div class="back-toop-tooltip">
            <span>Back To Top</span>
          </div>

          <div class="top-arrow"></div>

          <div class="top-line"></div>
        </a>
        {/* Footer Bottom End */}
      </footer>
    </div>
  );
}
