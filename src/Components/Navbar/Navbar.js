import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    // setFlag(false)
  }, []);
  const listShow = (e) => {
    let val = document.getElementById("menu-button").className;
    if (val == "") {
      document.getElementById("menu-button").classList.add("menu-opened");
      document.getElementById("navList").style.display = "block";
      document.getElementById("navList").classList.add("open");
    } else if (val == "menu-opened") {
      document.getElementById("menu-button").classList.remove("menu-opened");
      document.getElementById("navList").style.display = "none";
      document.getElementById("navList").classList.remove("open");
    }
  };
  const sideBarOpen = () => {
    document.getElementById("offcanvas-overlay").classList.add("show");

    document.getElementById("offcanvas-wrapper").classList.add("active");
  };
  const sideBarClose = () => {
    document.getElementById("offcanvas-overlay").classList.remove("show");

    document.getElementById("offcanvas-wrapper").classList.remove("active");
  };
  return (
    <div>
      {/* Preloader Begin */}

      {flag && (
        <div className="preloader w-100 h-100 position-fixed">
          <div className="loader">
            <img className="icon" src="assets/img/preloader.png" alt="" />
          </div>
        </div>
      )}
      {/* Preloader End */}
      {/* Header Begin */}
      <header className="header fixed-top">
        {/* Header Style One Begin */}
        <div className="fixed-top header-main style--one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-4 col-8">
                {/* Logo Begin */}
                <div className="logo">
               <Link to={'/'}>   <a href="#">
                    <img
                      className="default-logo"
                      src="assets/img/logo-1.png"
                      data-rjs={2}
                      alt=""
                    />
                    <img
                      className="sticky-logo"
                      src="assets/img/logo-1.png"
                      data-rjs={2}
                      alt=""
                    />
                  </a>
                  </Link>
                </div>
                {/* Logo End */}
              </div>
              <div className="col-lg-9 col-sm-8 col-4">
                {/* Main Menu Begin */}
                <div className="main-menu d-flex align-items-center justify-content-end">
                  <div id="menu-button" class="" onClick={listShow}>
                    <span></span>
                  </div>
                  <ul className="nav align-items-center" id="navList">
                    <li>
                      <Link to={"/"}>
                        {" "}
                        Home
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to={"/about-us"}>
                        {" "}
                        About Us
                      </Link>
                      <ul className="sub-menu">
                          {" "}
                          <li>
                        <Link to={"/profile"}>
                            <a href="#">Profile</a>
                        </Link>
                          </li>{" "}
                          {" "}
                          <li>
                        <Link to={"/team"}>
                            <a href="#">Team</a>
                        </Link>
                          </li>{" "}
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                 <Link to={'/digital-marketing'}>    Services </Link> 
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <Link to={"/digital-marketing"}>
                            {" "}
                            <a href="#">Digital Marketing </a>{" "}
                          </Link>
                          <ul className="sub-menu">
                              {" "}
                              <li>
                            <Link to={"/social-media-marketing"}>
                                <a href="#">Social Media Marketing</a>
                            </Link>
                              </li>{" "}
                              {" "}
                              <li>
                            <Link to={"content-marketing"}>
                                <a href="#">
                                  Content Development &amp; Marketing
                                </a>
                            </Link>
                              </li>
                              {" "}
                              <li>
                            <Link to={"lead-generation"}>
                                <a href="#">Lead Generation</a>
                            </Link>
                              </li>{" "}
                              {" "}
                              <li>
                            <Link to={"online-reputation-management"}>
                                <a href="#">Online Reputation Management</a>
                            </Link>
                              </li>{" "}
                              {" "}
                              <li>
                            <Link to={"seo-and-google-ads"}>
                                <a href="#">SEO &amp; Google Ads</a>
                            </Link>
                              </li>{" "}
                          </ul>
                        </li>
                          {" "}
                          <li>
                        <Link to={"app-development"}>
                            <a href="#">App Development</a>
                        </Link>
                          </li>{" "}
                        <li className="menu-item-has-children">
                            {" "}
                          <Link to={"web-development"}>
                            <a href="#">Web Development Services </a>{" "}
                          </Link>
                          <ul className="sub-menu">
                              {" "}
                              <li>
                            <Link to={"web-desiging-development"}>
                                <a href="#">Web Desiging / Development</a>
                            </Link>
                              </li>{" "}
                              {" "}
                              <li>
                            <Link to={"ecommerce-website"}>
                                <a href="#">Ecommerce Website</a>
                            </Link>
                              </li>{" "}
                              {" "}
                           
                              {" "}
                              <li>
                            <Link to={"software-development"}>
                                <a href="#">Software Development</a>
                            </Link>
                              </li>{" "}
                          </ul>
                        </li>
                          {" "}
                          <li>
                        <Link to={"company-profiling"}>
                            <a href="#">Company Profiling</a>
                        </Link>
                          </li>{" "}
                          {" "}
                          <li>
                        <Link to={"logo-designing"}>
                            <a href="#">Logo Designing</a>
                        </Link>
                          </li>{" "}
                          {" "}
                          <li>
                        <Link to={"media-planning-buying"}>
                            <a href="#">Media Planning &amp; Buying</a>
                        </Link>
                          </li>{" "}
                      </ul>
                    </li>
                      {" "}
                      <li>
                    <Link to={"portfolio"}>
                       Portfolio
                    </Link>
                      </li>{" "}
                      {" "}
                      <li>
                    <Link to={"hosting"}>
                       Hosting 
                    </Link>
                      </li>{" "}
                   
                      <li>
                    <Link to={"contact"}>
                    Contact
                    </Link>
                      </li>{" "}
                  </ul>
                  {/* Offcanvas Holder Trigger */}
                  <span
                    className="offcanvas-trigger text-right d-none d-lg-block"
                    id="openSide"
                    onClick={sideBarOpen}
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                  {/* Offcanvas Trigger End */}
                </div>
                {/* Main Menu ENd */}
              </div>
            </div>
          </div>
        </div>
        {/* Header Style One End */}
      </header>
      {/* Header End */}
      {/* Offcanvas Begin */}
      <div
        className="offcanvas-overlay fixed-top w-100 h-100 "
        id="offcanvas-overlay"
      ></div>
      <div
        className="offcanvas-wrapper bg-white fixed-top h-100 "
        id="offcanvas-wrapper"
      >
        {/* Offcanvas Close Button Begin */}
        <div
          className="offcanvas-close position-absolute"
          id="closeSide"
          onClick={sideBarClose}
        >
          <img src="assets/img/icons/close.svg" className="svg" alt="" />
        </div>
        {/* Offcanvas Close Button End */}
        {/* Offcanvas Content Begin */}
        <div className="offcanvas-content">
          {/* About Widget Begin */}
          <div className="widget widget_about">
            <div className="widget-logo">
              <img src="assets/img/logo-1.png" data-rjs={2} alt="" />
            </div>
            <div className="about-content">
              <p>
                WebLabz Technologies is a 24x7 working IT agency, headquartered
                at Faridabad - one of the Smart Cities and IT Hubs of India.
              </p>
            </div>
          </div>
          {/* About Widget End */}
          {/* Flicker Widget Begin */}
          <div className="widget widget_flicker">
            {/* Widget Logo Begin */}
            <div className="widget-title">
              <h4>Latest Shots</h4>
            </div>
            {/* Widget Logo End */}
            <ul className="d-flex flex-wrap">
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f1.png" data-rjs={2} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f2.png" data-rjs={2} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f3.png" data-rjs={2} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f4.png" data-rjs={2} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f5.png" data-rjs={2} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f6.png" data-rjs={2} alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* Flicker Widget End */}
          {/* Contact Widget Begin */}
          <div className="widget widget_contact_info">
            {/* Widget Logo Begin */}
            <div className="widget-title">
              <h4>Get in touch</h4>
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
                  <a href="tel:+919990013009">+91 - 9990013009 </a>
                </p>
              </div>
              <div className="single-info">
                <span>Support mail</span>
                <p>
                  <a href="mailto:sales@weblabz.in">sales@weblabz.in </a>
                  <a href="mailto:info@weblabz.in">info@weblabz.in</a>
                </p>
              </div>
            </div>
            {/* Widget Content End */}
          </div>
          {/* About Widget End */}
          {/* Offcanvas Button Begin */}
          <div className="offcanvas-btn">
    <Link to={'contact'}>        <a href="#" className="btn">
              <span>Get Appointment</span>
            </a>
            </Link>
          </div>
          {/* Offcanvas Button End */}
        </div>
        {/* Offcanvas Content End */}
      </div>
    </div>
  );
}
