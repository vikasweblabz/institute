import React, { useState } from "react";

export default function Portfolio() {
  const [all, setAll] = useState(true);
  const [funds, setFunds] = useState(false);
  const [investment, setInvestment] = useState(false);
  const [business, setBusiness] = useState(false);
  const [financial, setFinancial] = useState(false);
  const All = () => {
    console.log("all is clicked");
    setAll(true);
    setFunds(false);
    setInvestment(false);
    setBusiness(false);
    setFinancial(false);
  };
  const Funds = () => {
    console.log("funds is clicked");
    setAll(false);
    setFunds(true);
    setInvestment(false);
    setBusiness(false);
    setFinancial(false);
  };
  const Investment = () => {
    console.log("investment is clicked");
    setAll(false);
    setFunds(false);
    setInvestment(true);
    setBusiness(false);
    setFinancial(false);
  };
  const Business = () => {
    console.log("business is clicked");
    setAll(false);
    setFunds(false);
    setInvestment(false);
    setBusiness(true);
    setFinancial(false);
  };
  const Financial = () => {
    console.log("financial is clicked");
    setAll(false);
    setFunds(false);
    setInvestment(false);
    setBusiness(false);
    setFinancial(true);
  };
  return (
    <div>
      <section
        className="page-title-bg pt-250 pb-100"
        data-bg-img="assets/img/section-pattern/page-title.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Portfolio</h2>
                <ul className="list-inline">
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}
      {/* About Section Begin */}
      {/* About Section Begin */}
      <section className="pb-120 ov-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <p>
                  Mutual has cannot beauty indeed now sussex merely you. It
                  possible no husbands jennings ye offended packages pleasant
                  he. Remainder recommend who applauded departure joy.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Porject Nav Begin */}
              <div className="project-nav text-center mb-30">
                <div className="nav justify-content-center align-items-center">
                  <ul className="project_filter list-inline">
                    <li className="active" data-filter="*" onClick={All}>
                      <span className="filter-btn">All</span>
                    </li>
                    <li className data-filter=".financial" onClick={Financial}>
                      <span className="filter-btn">Web Designing</span>
                    </li>
                    <li className data-filter=".business" onClick={Business}>
                      <span className="filter-btn">App Development</span>
                    </li>
                    <li className data-filter=".funds" onClick={Funds}>
                      <span className="filter-btn">Company Profiling</span>
                    </li>
                    <li
                      className
                      data-filter=".investment"
                      onClick={Investment}
                    >
                      <span className="filter-btn">Digital Marketing</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Project Nav End */}
            </div>
          </div>

          {/* Single Project Begin */}
          {all && (
            <>
              <div
                className="row project-items grid"
                style={{ position: "relative", height: "1868px" }}
              >
                <div className="col-lg-6 grid-item sales ">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a href="https://royalindiaholiday.com/" target="_blank">
                        <img
                          src="assets/img/project/project-1.png"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
                {/* Single Project End */}
                {/* Single Project Begin */}
                <div className="col-lg-6 grid-item sales financial">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a
                        href="https://www.sterlingpublishers.in/"
                        target="_blank"
                      >
                        <img
                          src="assets/img/project/project-2.png"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
                {/* Single Project End */}
                {/* Single Project Begin */}
                <div className="col-lg-6 grid-item ">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a href="http://joy2serve.org/" target="_blank">
                        <img
                          src="assets/img/project/project-3.png"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
                {/* Single Project End */}
                {/* Single Project Begin */}
                <div className="col-lg-6 grid-item funds">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a href="http://justdiallogistics.com/" target="_blank">
                        <img
                          src="assets/img/project/project-4.png"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
                {/* Single Project End */}
                <div className="col-lg-6 grid-item financial business">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.affinityeducation"
                        target="_blank"
                      >
                        <img
                          src="assets/img/project/affinity.jpg"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
                <div className="col-lg-6 grid-item financial investment ">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a href="https://www.fbdshc.in/" target="_blank">
                        <img
                          src="assets/img/project/fbdshc.jpg"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
                <div className="col-lg-6 grid-item financial investment ">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a href="https://www.dr2bthin.com/" target="_blank">
                        <img
                          src="assets/img/project/drbin.jpg"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
              </div>
            </>
          )}
          {financial && (
            <>
              <div
                className="row project-items grid"
                style={{ position: "relative", }}
              ></div>
           
              {/* Single Project End */}
              {/* Single Project Begin */}
              <div className="col-lg-6 grid-item sales financial">
                <div className="single-project-item">
                  {/* Project Image Begin */}
                  <div className="image">
                    <a
                      href="https://www.sterlingpublishers.in/"
                      target="_blank"
                    >
                      <img
                        src="assets/img/project/project-2.png"
                        data-rjs={2}
                        alt=""
                      />
                    </a>
                  </div>
                  {/* Project Image End */}
                </div>
              </div>
              {/* Single Project End */}
              {/* Single Project Begin */}

              {/* Single Project End */}
              {/* Single Project Begin */}

              {/* Single Project End */}
              <div className="col-lg-6 grid-item financial business">
                <div className="single-project-item">
                  {/* Project Image Begin */}
                  <div className="image">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.affinityeducation"
                      target="_blank"
                    >
                      <img
                        src="assets/img/project/affinity.jpg"
                        data-rjs={2}
                        alt=""
                      />
                    </a>
                  </div>
                  {/* Project Image End */}
                </div>
              </div>
              <div className="col-lg-6 grid-item financial investment ">
                <div className="single-project-item">
                  {/* Project Image Begin */}
                  <div className="image">
                    <a href="https://www.fbdshc.in/" target="_blank">
                      <img
                        src="assets/img/project/fbdshc.jpg"
                        data-rjs={2}
                        alt=""
                      />
                    </a>
                  </div>
                  {/* Project Image End */}
                </div>
              </div>
              <div className="col-lg-6 grid-item financial investment ">
                <div className="single-project-item">
                  {/* Project Image Begin */}
                  <div className="image">
                    <a href="https://www.dr2bthin.com/" target="_blank">
                      <img
                        src="assets/img/project/drbin.jpg"
                        data-rjs={2}
                        alt=""
                      />
                    </a>
                  </div>
                  {/* Project Image End */}
                </div>
              </div>
            </>
          )}
          {business && (
            <>
              <div
                className="row project-items grid"
                style={{ position: "relative" }}
              >
              
                {/* Single Project End */}
                {/* Single Project Begin */}
            
                {/* Single Project End */}
                {/* Single Project Begin */}
               
                {/* Single Project End */}
                {/* Single Project Begin */}
                
                {/* Single Project End */}
                <div className="col-lg-6 grid-item financial business">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.affinityeducation"
                        target="_blank"
                      >
                        <img
                          src="assets/img/project/affinity.jpg"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
             
              </div>
            </>
          )}
          {funds && (
            <>
              <div
                className="row project-items grid"
                style={{ position: "relative", }}
              >
             
                {/* Single Project End */}
                {/* Single Project Begin */}
              
                {/* Single Project End */}
                {/* Single Project Begin */}
               
                {/* Single Project End */}
                {/* Single Project Begin */}
                <div className="col-lg-6 grid-item funds">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a href="http://justdiallogistics.com/" target="_blank">
                        <img
                          src="assets/img/project/project-4.png"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
                {/* Single Project End */}
              
             
              </div>
            </>
          )}
          {investment && (
            <>
              <div
                className="row project-items grid"
                style={{ position: "relative", }}
              >
             
                {/* Single Project End */}
                {/* Single Project Begin */}
            
                {/* Single Project End */}
                {/* Single Project Begin */}
               
                {/* Single Project End */}
                {/* Single Project Begin */}
            
                {/* Single Project End */}
               
                <div className="col-lg-6 grid-item financial investment ">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a href="https://www.fbdshc.in/" target="_blank">
                        <img
                          src="assets/img/project/fbdshc.jpg"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
                <div className="col-lg-6 grid-item financial investment ">
                  <div className="single-project-item">
                    {/* Project Image Begin */}
                    <div className="image">
                      <a href="https://www.dr2bthin.com/" target="_blank">
                        <img
                          src="assets/img/project/drbin.jpg"
                          data-rjs={2}
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Project Image End */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
