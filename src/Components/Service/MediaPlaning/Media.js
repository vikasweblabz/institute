import React from 'react'

export default function Media() {
  return (
    <div>
         <section className="page-title-bg pt-250 pb-100" data-bg-img="assets/img/section-pattern/page-title.png">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>Reach Out to a Larger Audience with Optimal Media Placements</h2>
                  <ul className="list-inline">
                    <li>Media Planning &amp; Buying</li>
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
                  <p>We at Weblabz give you countless reasons to choose us for your media planning and management
                    services in Delhi NCR. We offer a holistic approach to buy traditional media (print and
                    electronics), online media, social media, and digital media, individually or combined to make sure
                    the brands are reachable to customers across multiple connecting points. With years of experience
                    and long-standing relationship with media professionals nationwide, we know whom we are dealing
                    with and how to identify opportunities that can deliver better placement with better ROI for our
                    clients.
                  </p>
                  <p>Our strength lies in our ability to provide personalised media planning and buying services using
                    Television, Cinema, Radio, Print, Digital, Outdoor Ads, Social Media and more, that enables you to
                    connect to your audience in more ways than you may have ever imagined. Weblabz is a reputed media
                    planner in India with a team of confident negotiators and marketers who are ideally qualified to
                    power your campaign or promotion outcomes seamlessly. We at Weblabz buy the best placements for
                    your brands and work closely with you to help your brand connect to your target markets with the
                    help of our strategic media campaign.</p>
                </div>
                {/* Section Title End */}
              </div>
              {/* Video Area */}
              <div className="col-lg-5 video-area mt-50 mt-lg-0" style={{verticalAlign: 'middle'}}>
                <img src="assets/img/media-planing.png" data-rjs={2} alt="" />
              </div>
              {/* End Video Area */}
            </div>
          </div>
        </section>
    </div>
  )
}
