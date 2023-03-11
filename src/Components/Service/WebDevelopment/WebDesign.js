import React from 'react'

export default function WebDesign() {
  return (
    <div>
         <section className="page-title-bg pt-250 pb-100" data-bg-img="assets/img/section-pattern/page-title.png">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>Creating Flawless User Experience</h2>
                  <ul className="list-inline">
                    <li><a href="web-development.html">Web Development Services</a></li>
                    <li>Web Desiging / Development</li>
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
                  <p>Your website is the face of your business hence it is important to design a website that is not
                    only functionally perfect but appearance-wise impressive too. We at Weblabz aim to help businesses
                    reach new heights of success by achieving new milestones in web designing and development. The
                    purpose of websites is to influence human minds by delivering the highest visual engagement,
                    helping businesses make profitable decisions. </p>
                  <p>Our consistent quality, attention to detail and commitment to our clients comes from a combination
                    of the values of sincerity, integrity and teamwork. We are a Delhi NCR based team of web
                    strategists, web designers, UI/UX specialists, digital analysts and experienced developers,
                    committed to delivering personalised made solutions. Our range of websites includes simple to fully
                    functional integrated business operation.</p>
                </div>
                {/* Section Title End */}
              </div>
              {/* Video Area */}
              <div className="col-lg-5 video-area mt-50 mt-lg-0" style={{verticalAlign: 'middle'}}>
                <img src="assets/img/web-design.png" data-rjs={2} alt="" />
              </div>
              {/* End Video Area */}
            </div>
            <hr />
            <div className="section-title mb-4">
              <h3>Strengthening Your Position in the Industry </h3>
              <p>Your website must be as unique as your brand. At Weblabz, we are committed to providing you with
                transparency and quality in every step of the web design and development. We ensure that we customise
                your digital presence by creating inspirational designs to reflect your brand strategy that can
                strengthen the position of your business in the industry. Through our designs we intend to capture your
                client’s attention and compel them to take quick action, helping you in improving your business
                efficiency.</p>
            </div>
          </div>
        </section>
    </div>
  )
}
