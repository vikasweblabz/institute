import React from 'react'

export default function DigitalMarketing() {
  return (
    <div>
          <section className="page-title-bg pt-250 pb-100" data-bg-img="assets/img/section-pattern/page-title.png">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>Grow your Business with Us</h2>
                  <ul className="list-inline">
                    <li>Digital Marketing </li>
                  </ul> 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Page Title End */}
        {/* About Section End */}
        {/* About Section Begin */}
        <section className="pb-120 ov-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                {/* Section Title Begin */}
                <div className="section-title mb-4">
                  <p>At Weblabz, we are focused on driving growth for our valued clients. With vast experience in the
                    digital marketing sphere and powered by data analytics, digital technology, quality content and
                    market research, we build human connection through a digital experience. </p>
                  <p>Equipped with diverse industry perspectives and expertise, our all-inclusive digital marketing
                    services reap the desired results that will indisputably take your business to the next level. As a
                    top-notch digital marketing company in Delhi NCR from India, we ensure you are investing in the
                    channels and platforms that are committed to helping you meet your digital marketing goals.
                  </p>
                </div>
                {/* Section Title End */}
              </div>
              {/* Video Area */}
              <div className="col-lg-5 video-area mt-50 mt-lg-0" style={{verticalAlign: 'middle'}}>
                <img src="assets/img/digital-marketing.png" data-rjs={2} alt="" />
              </div>
              {/* End Video Area */}
            </div>
            <hr />
            <div className="section-title mb-4">
              <h3>Our digital marketing services include:</h3>
              <p>
              </p><ul>
                <li><a href="social-media-marketing.html">Social Media Marketing</a></li>
                <li><a href="content-marketing.html">Content Development &amp; Marketing</a></li>
                <li><a href="lead-generation.html">Lead Generation</a></li>
                <li><a href="online-reputation-management.html">Online Reputation Management</a></li>
                <li><a href="seo-and-google-ads.html">SEO &amp; Google Ads</a></li>
              </ul>
              <p />
            </div>
          </div>
        </section>
    </div>
  )
}
