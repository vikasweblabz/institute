import React from 'react'
import { Link } from 'react-router-dom'
export default function Service() {
  return (
    <div>
              <section className="pt-120 pb-120 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/service-pattern.png")'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" style={{display:'block'}}>
              {/* Section Title Begin */}
              <div className="section-title">
                <h3>Service</h3>
                <h2>We’re Providing <br />
                  Best Solutions <br />
                  For Your Business</h2>
              </div>
              {/* Section Title End */}
              {/* Button Begin */}
         <Link to={'/portfolio'}>     <a href="#" className="btn"><span>view All</span></a> </Link>
              {/* Button End */}
            </div>
            <div className="col-lg-6">
              <div className="row mt-40 mt-lg-0">
                <div className="col-sm-6 single-service-wrapper">
                  {/* Single Service Begin */}
                  <div className="single-service text-center">
                    {/* Icon Begin */}
                    <div className="icon">
                      <img src="assets/img/icons/service-1.png" data-rjs={2} alt="" data-rjs-processed="true" />
                    </div>
                    {/* Icon End  */}
                    {/* Content Begin */}
                    <div className="content">
                      <h4>Digital Marketing</h4>
                      <p>At Weblabz, we are focused on driving growth for our valued clients. </p>
                <Link to={'/digital-marketing'}>      <a href="#" className="btn-inline">Read More</a> </Link>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Single Service End */}
                </div>
                <div className="col-sm-6 single-service-wrapper">
                  {/* Single Service Begin */}
                  <div className="single-service text-center">
                    {/* Icon Begin */}
                    <div className="icon">
                      <img src="assets/img/icons/service-2.png" data-rjs={2} alt="" data-rjs-processed="true" />
                    </div>
                    {/* Icon End  */}
                    {/* Content Begin */}
                    <div className="content">
                      <h4>App Development</h4>
                      <p> Technology is moving at a fast pace. Make sure you are not losing out and have
                        adapted it to stay ahead in the competition. </p>
                 <Link to={'/app-development'}>     <a href="#" className="btn-inline">Read More</a> </Link>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Single Service End */}
                </div>
                <div className="col-sm-6 single-service-wrapper">
                  {/* Single Service Begin */}
                  <div className="single-service text-center">
                    {/* Icon Begin */}
                    <div className="icon">
                      <img src="assets/img/icons/service-3.png" data-rjs={2} alt="" data-rjs-processed="true" />
                    </div>
                    {/* Icon End  */}
                    {/* Content Begin */}
                    <div className="content">
                      <h4>Company Profiling</h4>
                      <p>At Weblabz company profiling is a window to your company, giving business partners, customers, and employees a look at what you offer and provide. </p>
                 <Link to={'/company-profiling'}>     <a href="#" className="btn-inline">Read More</a> </Link>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Single Service End */}
                </div>
                <div className="col-sm-6 single-service-wrapper">
                  {/* Single Service Begin */}
                  <div className="single-service text-center">
                    {/* Icon Begin */}
                    <div className="icon">
                      <img src="assets/img/icons/service-4.png" data-rjs={2} alt="" data-rjs-processed="true" />
                    </div>
                    {/* Icon End  */}
                    {/* Content Begin */}
                    <div className="content">
                      <h4>Web Development Services</h4>
                      <p>Your website is the face of your business hence it is important to design a
                        website</p>
                   <Link to={'/web-desiging-development'}>   <a href="#" className="btn-inline">Read More</a> </Link>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Single Service End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
