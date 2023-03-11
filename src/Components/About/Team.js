import React from 'react'

export default function Team() {
  return (
    <div>
            <section className="page-title-bg pt-250 pb-100 bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Weaving Dreams into Reality</h2>
                <ul className="list-inline">
                  <li><a href="about-us.html">About Us</a></li>
                  <li>Our Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-120 ov-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Begin */}
              <div className="section-title mb-4">
                <p>We are a tribe of creative people that work in harmony to convert complex issues into business
                  opportunities. The Team at Weblabz comprises of a group of highly customer-focused, result-oriented
                  creative designers, content specialists, brand strategists, qualified developers, and inspirational
                  thinkers. Each one in the team is unique and we honour the distinction in us, but when our diverse
                  minds unite, we create an exceptional brand experience. </p>
              </div>
              {/* Section Title End */}
            </div>
            {/* Video Area */}
            <div className="col-lg-5 video-area mt-50 mt-lg-0">
              <img src="assets/img/team.png" data-rjs={2} alt="" />
            </div>
            {/* End Video Area */}
          </div>
        </div>
      </section>
    </div>
  )
}
