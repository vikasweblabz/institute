import React from 'react'

export default function Logo() {
  return (
    <div>
         <section className="page-title-bg pt-250 pb-100" data-bg-img="assets/img/section-pattern/page-title.png">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>Logos that Perfectly Fit Your Vision</h2>
                  <ul className="list-inline">
                    <li>Logo Designing</li>
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
                  <p> Whether you are looking for a 2D, 3D or an animated, we at Weblaz understand your need to achieve
                    results, and that is what drives us in logo designing for brands. The logo is that sign of your
                    company that builds your brand image and represents you everywhere. A logo must not only grab the
                    attention of your audience, but it should also be able to create recall value among them. At
                    Weblabz, we take notice of every element and factor that plays a significant role in the designing
                    of logos for brands. We are passionate about working with all small, mid-sized businesses and large
                    corporations and offer carefully crafted creative logo designs in Delhi NCR with boutique-style
                    consultation. </p>
                </div>
                {/* Section Title End */}
              </div>
              {/* Video Area */}
              <div className="col-lg-5 video-area mt-50 mt-lg-0" style={{verticalAlign: 'middle'}}>
                <img src="assets/img/logo-design.png" data-rjs={2} alt="" />
              </div>
              {/* End Video Area */}
            </div>
          </div>
        </section>
    </div>
  )
}
