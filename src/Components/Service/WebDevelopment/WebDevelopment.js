import React from 'react'

export default function WebDevelopment() {
  return (
    <div>
          <section className="page-title-bg pt-250 pb-100" data-bg-img="assets/img/section-pattern/page-title.png">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>Delivering Feature-Rich and Powerful Digital Solutions</h2>
                  <ul className="list-inline">
                    <li> Web Development Services </li>
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
                  <p>You may have many innovative ideas but they are of no use till you turn them into effective
                    business plans. At Weblabz we convert innovative ideas into beautiful and effective websites that
                    help you market your idea into successful growth stories. We are not just a web development company
                    but a true friend for our customers that help them transform their ideas into functional and
                    scalable digital solutions.</p>
                  <p>
                    Our web development services include every solution that enriches your online presence. From
                    building websites and online stores to managing blogs and developing robust and reliable software,
                    we enable our customers to make a positive impact. We are a complete web design, development and
                    digital marketing service provider in Delhi NCR offering every solution that would meet your every
                    digital need. In this world, where maximum businesses are increasingly engaging in digital space to
                    communicate with their customers, it is necessary for all who are into business to think of
                    building an effective digital presence and that starts with an efficient web development service
                    that can help companies find solutions that meets their specific business needs. </p>
                </div>
                {/* Section Title End */}
              </div>
              {/* Video Area */}
              <div className="col-lg-5 video-area mt-50 mt-lg-0" style={{verticalAlign: 'middle'}}>
                <img src="assets/img/app-video.png" data-rjs={2} alt="" />
              </div>
              {/* End Video Area */}
            </div>
            <hr />
            <div className="section-title mb-4">
              <h3>What We Offer </h3>
              <p>
              </p><ul>
                <li>Web Design/Development</li>
                <li>Ecommerce Website</li>
                <li>Blog Development</li>
                <li>Software Development</li>
              </ul>
              <p />
            </div>
          </div>
        </section>
    </div>
  )
}
