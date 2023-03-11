import React,{useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
export default function Count() {
    const [counteron,setCounterOn]=useState(false);
	console.log('=========>',counteron)
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>{setCounterOn(false)}}>
    <div>
          <section className="pt-120 pb-70 gradient-bg">
        <div className="container">
          <div className="row align-items-center">
            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count"><span class="counter">
			{
				counteron && 
				<CountUp start={0} end={15} duration={2} delay={0}/>
			}
			</span></h2>
                <p>Years of experience</p>
              </div>
            </div>
            {/* End Single Counter */}
            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count"><span class="counter">
			{
				counteron && 
				<CountUp start={0} end={1250} duration={2} delay={0}/>
			}
			</span>+</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            {/* End Single Counter */}
            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count"><span class="counter">
			{
				counteron && 
				<CountUp start={0} end={1} duration={2} delay={0}/>
			}
			</span>k+</h2>
                <p>Project Done</p>
              </div>
            </div>
            {/* End Single Counter */}
            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count"><span class="counter">
			{
				counteron && 
				<CountUp start={0} end={100} duration={2} delay={0}/>
			}
			</span>+</h2>
                <p>Giving Consultancy</p>
              </div>
            </div>
            {/* End Single Counter */}
          </div>
        </div>
      </section>
    </div>
    </ScrollTrigger>
  )
}
