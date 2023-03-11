import React from 'react'

export default function Software() {
  return (
    <div>
          <section className="page-title-bg pt-250 pb-100" data-bg-img="assets/img/section-pattern/page-title.png">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>Software Solutions as per your Specific Requirement</h2>
                  <ul className="list-inline">
                    <li><a href="index.html">Web Development Services</a></li>
                    <li>Software Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Page Title End */}
        {/* About Section Begin */}
        <section className="pb-120 ov-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                {/* Section Title Begin */}
                <div className="section-title mb-4">
                  <p>In the business of software development possessing years of experience, we at Weblabz help your
                    business transcend to the next level by offering you top-rated software development solutions in
                    Delhi NCR. We design, develop and deliver high-quality IT solutions using emerging technologies.
                    Whether you are a start-up or an enterprise of repute, we deeply understand your business need and
                    provide full-circle development services to our esteemed clients. Being a trusted name in the
                    sphere of software development, we have employed the best industry standards and practices in our
                    processes to deliver robust, scalable, secure, and reliable IT solutions.
                  </p>
                  <p>
                    We understand how diverse are the demands of our clients, hence we ensure we possess all the
                    expertise and skills in various platforms and languages to meet all the demands of our valued
                    clients. It is our vast experience, highly qualified professionals, key business insights, and a
                    dedicated working process that is constantly backing us to provide optimum technology solutions.
                    Our full-circle software development solutionin Delhi NCR starts from software consultancy, product
                    requirement analysis, software development, UI/UX design, software migration and up-gradation, ERP
                    Development, support and management, QA and testing and finally support and maintenance. You can
                    either take our complete service or even opt for specific services as per your need.
                  </p>
                  <p>
                    At Weblabz, we apply almost every advanced technology to cater to the wide-ranging requirements of
                    our customers from multiple domains. We are committed to delivering bug-free and high performing IT
                    solutions following agile methodology. Our team uses proven tools and technique to ensure optimum
                    implementation and success.
                  </p>
                </div>
                {/* Section Title End */}
              </div>
              {/* Video Area */}
              <div className="col-lg-5 video-area mt-50 mt-lg-0" style={{verticalAlign: 'middle'}}>
                <img src="assets/img/software-development.png" data-rjs={2} alt="" />
              </div>
              {/* End Video Area */}
            </div>
            <hr />
          </div>
        </section>
        {/* About Section End */}
        {/* About Section Begin */}
        <section className="pb-120 ov-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                {/* Section Title Begin */}
                <div className="section-title mb-4">
                  <h2>We are expertise In</h2>
                  <ul className="list-unstyled list-check  float-left" style={{marginRight: '40px'}}>
                    <li><i className="fa fa-check" aria-hidden="true" /> C/C++</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Shell scripting</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Java</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> PHP</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Ruby </li>
                  </ul>
                  <ul className="list-unstyled list-check float-left">
                    <li><i className="fa fa-check" aria-hidden="true" /> Oracle</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> MySQL</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Informix</li>
                    <li><i className="fa fa-check" aria-hidden="true" /> Sybase </li>
                  </ul>
                </div>
                {/* Section Title End */}
              </div>
              {/* Video Area */}
              <div className="col-lg-5 video-area mt-50 mt-lg-0">
                <img src="assets/img/section-bg/about-feature.png" data-rjs={2} alt="" />
              </div>
              {/* End Video Area */}
            </div>
          </div>
        </section>
    </div>
  )
}
