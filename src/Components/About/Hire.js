import React from 'react'

export default function Hire() {
  return (
    <div>
         <section className="pb-120 ov-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Begin */}
              <div className="section-title mb-4">
                <h3>Why Hire Us?</h3>
                <h2>Our Mission Is To Help <br />
                  Clients To Meet Their Goal
                </h2>
                <p>After seeking experience in the same field for almost a decade, WebLabz have made strong roots in
                  website designing, website development, IT Solutions, Support Systems and nourished our clients
                  with everything through optimistic and white hat online promotions.
                  <br />We keep on improving ourselves because we know change is the requirement of today, hence our
                  technologies help in keeping our clients maintaining their benchmarks.
                  <br />In short, the talented workforce of WebLabz has got everything that can help you out at
                  various stages of your online business development to online promotion and branding.
                </p>
              </div>
              {/* Section Title End */}
            </div>
            {/* Video Area */}
            <div className="col-lg-5 video-area mt-50 mt-lg-0">
              <img src="assets/img/section-bg/about-feature.png" data-rjs={2} alt="" />
              <a href="#" className="vdo-btn popup-video"><img src="assets/img/icons/play.svg" className="svg" alt="" /> Watch
                Video</a>
            </div>
            {/* End Video Area */}
          </div>
        </div>
      </section>
    </div>
  )
}
