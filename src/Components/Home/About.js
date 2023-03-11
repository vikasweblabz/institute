import React from 'react'

export default function About() {
  return (
    <div>
          <section className="pt-120 pb-120 section-pattern ov-hidden bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/about-pattern.png")'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Begin */}
              <div className="section-title">
                <h3>About WebLabz Technologies </h3>
                <h2>Taking Your Online Presence to Next Level<br />
                </h2>
                <p>WebLabz Technologies is a 24x7 working IT agency, headquartered at Faridabad - one of the
                  Smart Cities and IT Hubs of India. As one of the leading names in the industry, we provide
                  an experienced and qualified team of designers, developers, content specialists, online
                  marketers and consultants to take your online presence to the next level. Moreover, we also
                  offer complete maintenance and support services to resolve all your simple to complex issues
                  quickly and easily. </p>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5 video-area mt-50 mt-lg-0">
              <img src="assets/img/section-bg/about-feature.png" data-rjs={2} alt="" data-rjs-processed="true" />
              <a href="https://www.youtube.com/watch?v=ctvlUvN6wSE" className="vdo-btn hide1 popup-video"><img src="assets/img/icons/play.svg" className="svg" alt="" /> Watch Video</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
