import React from 'react'

export default function AboutUs() {
  return (
    <div>
          <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Who We Are</h3>
                <h2>We’re Expertise &amp; Strategic Agency <br />
                  To Take Care Of Your Business
                </h2>
                <p>WebLabz Technologies is a 24x7 working IT agency, headquartered at Faridabad - one of the Smart
                  Cities and IT Hubs of India. Since its inception in 2005, WebLabz has been satisfying its clients
                  and businesses located across the world through out-of-the-box ideas, products and services in
                  various fields of Information Technology, IT Consultancy and Internet Services.</p>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img src="assets/img/about-main.jpg" data-rjs={2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
