import React from 'react'

export default function Profile() {
  return (
    <div>
           <section className="page-title-bg pt-250 pb-100 bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Helping Brands Realise the Role of Digital Technology</h2>
                <ul className="list-inline">
                  <li><a href="about-us.html">About Us</a></li>
                  <li>Profile</li>
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
                <p>Weblabz was formed with the dream of carving out a niche in the IT industry by providing fast,
                  reliable, secure and quality solutions to both businesses and their consumers. We are a team of
                  brilliant minds working closely with both start-ups and enterprise-level customers helping them
                  transform their business using innovative solutions. At Weblabz, we are specialised in web
                  development, mobile app development and digital marketing services and our diversified portfolio
                  span across multiple industries, covering real estate, education, healthcare, transport,
                  engineering, logistics, and many others. We are amongst the top web design and development
                  companies in Delhi NCR offering wide spectrum of web services to clients from diverse categories.
                </p>
                <p>
                  With an aim to create high-performing, secure and robust web and app solutions, we Weblabz help
                  brands realise the importance of online and digital mediums in today’s rapidly changing market
                  environment. Whatever is the size and type of your business, we ensure that our solutions solve
                  your real-world business problems with the support of our tools and technology that can deliver
                  superior results for your business. </p>
              </div>
              {/* Section Title End */}
            </div>
            {/* Video Area */}
            <div className="col-lg-5 video-area mt-50 mt-lg-0">
              <img src="assets/img/about.png" data-rjs={2} alt="" />
            </div>
            {/* End Video Area */}
          </div>
        </div>
      </section>
      <hr />
      <section className="pb-120 ov-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Begin */}
              <div className="section-title mb-4">
                <h3>What We Do ?</h3>
                <h2>Taking Your Online Presence to Next Level
                </h2>
                <p>WebLabz Technologies is a 24x7 working IT agency, headquartered at Faridabad - one of the Smart
                  Cities and IT Hubs of India. As one of the leading names in the industry, we provide an experienced
                  and qualified team of designers, developers, content specialists, online marketers and consultants
                  to take your online presence to the next level. Moreover, we also offer complete maintenance and
                  support services to resolve all your simple to complex issues quickly and easily. Whether it is
                  website design or development, mobile app design or development, SEO, Paid Ads, Digital Marketing
                  or Software Development in Delhi NCR, we strive to implement the best strategies we have to make
                  your brand stay ahead in the competition.
                </p>
                <h3>Our Work is Our Worship </h3>
                <p>
                  Fuelled by passion, driven by performance, filled with enthusiasm, and powered by the latest tools
                  and technology, we at Weblabz help you discover your brand’s potential in this increasingly
                  changing market condition. We build compelling brand stories and create an overwhelming user
                  experience that can deliver excellent results for your business.
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
