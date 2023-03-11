import React from 'react'
import AboutUs from './AboutUs'
import Hire from './Hire'
import Mission from './Mission'

export default function About() {
  return (
    <div>
         <section className="page-title-bg pt-250 pb-100 bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>About</h2>
                <ul className="list-inline">
                  <li> About Us </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutUs/>
      <Hire/>
      <Mission/>
    </div>
  )
}
