import React from "react";
import { Link } from "react-router-dom";
export default function Banner() {
  const handle=(e)=>{
    console.log(e.target.id)
    if(e.target.id=='uperBtn'){
          document.getElementById('uperBtn').classList.add('active')
          document.getElementById('lowerBtn').classList.remove('active')
          document.getElementById('uper').style.display='block';
          document.getElementById('lower').style.display='none';
          
    }
    else if(e.target.id=='lowerBtn'){
      document.getElementById('uperBtn').classList.remove('active')
      document.getElementById('lowerBtn').classList.add('active')
      document.getElementById('uper').style.display='none';
      document.getElementById('lower').style.display='block';
    }
    
  }
  return (
    <section
      className="banner section-pattern bg-img"
      style={{
        backgroundImage: 'url("assets/img/section-pattern/slider-pattern.png")',
      }}
    >
      {/* Banner Slider Begin */}
      <div
        className="banner-slider owl-carousel d-flex align-items-center justify-content-center owl-loaded owl-drag"
        data-owl-animate-in="fadeIn"
        data-owl-animate-out="fadeOut"
        data-owl-autoplay="false"
        data-owl-dots="true"
      >
        {/* Single Slide Begin */}
        {/* Banner Content Begin */}
        {/* Banner Content End */}
        {/* Single Slide End */}
        {/* Single Slide Begin */}
        {/* Single Slide End */}
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              
            }}
          >
            <div className="owl-item cloned" id="uper" style={{ width: "100%",marginTop:'4%' }}>
              <div className="single-banner-slider">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* Banner Content Begin */}
                      <div className="banner-content">
                        <h1>
                          Full-Service Web &amp; <br />
                          <span>App Development</span> <br />
                          &amp; Digital Marketing Company
                        </h1>
                        <Link to={'/contact'}>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#appointmentModalForm"
                          className="banner-btn btn"
                        >
                          <span>Get Appointment</span>
                        </a>
                        </Link>
                      </div>
                      {/* Banner Content End */}
                    </div>
                    <div className="col-lg-6">
                      {/* Banner Content Begin */}
                      <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                        <img
                          src="assets/img/banner/slider-1.png"
                          data-rjs={2}
                          alt=""
                        />
                      </div>
                      {/* Banner Content End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item showBanner" id="lower" style={{ width: "100%",marginTop:'8%' }}>
              <div className="single-banner-slider">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* Banner Content Begin */}
                      <div className="banner-content">
                        <h1>
                          We <span>Help Your Business</span> <br />
                          Scale New Heights for Digital Success
                        </h1>
                        <a href="#" className="banner-btn btn">
                          <span>Get Appointment</span>
                        </a>
                      </div>
                      {/* Banner Content End */}
                    </div>
                    <div className="col-lg-6">
                      {/* Banner Content Begin */}
                      <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                        <img
                          src="assets/img/banner/slider-2.png"
                          data-rjs={2}
                          alt=""
                        />
                      </div>
                      {/* Banner Content End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            
          
          </div>
        </div>
        <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev">
            <img src="assets/img/icons/angle-left.svg" className="svg" />
          </button>
          <button type="button" role="presentation" className="owl-next">
            <img src="assets/img/icons/angle-right.svg" className="svg" />
          </button>
        </div>
        <div className="owl-dots">
          <button role="button" id="uperBtn" className="owl-dot active" onClick={handle}>
            <span />
          </button>
          <button role="button" id="lowerBtn" className="owl-dot"  onClick={handle}>
            <span />
          </button>
        </div>
      </div>
      {/* Banner Slider End */}
    </section>
  );
}
