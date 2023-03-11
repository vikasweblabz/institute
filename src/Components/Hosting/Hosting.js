import React from 'react'

export default function Hosting() {
  return (
    <div>
          <section className="page-title-bg pt-250 pb-100" data-bg-img="assets/img/section-pattern/page-title.png">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>Web Hosting</h2>
                  <ul className="list-inline">
                    <li>Web Hosting</li>
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
                  <p>At Weblabz, we aim to make life easier for both businesses and their end-users. Our fast, reliable,
                    easy-to-control and secure web hosting services, are aimed at removing all worries and making your
                    functioning simple, and smooth. Different size of projects requires different tools and technology,
                    so ensure you choose the right technology that is powerful and enables you to scale and upgrade as
                    and when your business needs.</p>
                  <p>Connect your business to the global community, with your choice of web hosting plan, and we will
                    make sure your business gets layers of security and the protected environment through our
                    sustainable web hosting initiatives. Whether you are an individual, SME or an enterprise, we are
                    committed to superior quality support with our extensive scalableweb hosting services in Delhi NCR
                    including shared hosting, dedicated servers, virtual private servers, cloud hosting and more. With
                    our team of highly skilled professionals, we at Weblabz continue to achieve new milestones that
                    take us closer to being the market leader in India.</p>
                </div>
                {/* Section Title End */}
              </div>
              {/* Video Area */}
              <div className="col-lg-5 video-area mt-50 mt-lg-0" style={{verticalAlign: 'middle'}}>
                <img src="assets/img/web-hosting.png" data-rjs={2} alt="" />
              </div>
              {/* End Video Area */}
            </div>
          </div>
        </section>
    </div>
  )
}
