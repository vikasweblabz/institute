import React, { useEffect ,useState} from 'react'
// import ReCAPTCHA from 'react-google-recaptcha';
import Form from './Form';
export default function Contact() {
//  const[key,setKey]=useState('');
//   useEffect(()=>{
//     console.log('mount')
//     setKey('6Lc00uskAAAAAFfvk5Dmm8HlL8FqZU5OPqsoXemB')
//    return ()=>{
//       console.log('unmount')
      
//     }
//   }
//   ,[])
  // const handle=(value)=>{
  //   console.log('====>',value);
   
    
   
  // }
  return (
    <div >
     <section className="page-title-bg pt-250 pb-100 bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Contact Us</h2>
                <ul className="list-inline">
                  <li><a href="#">Home</a></li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
          <section className="pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* Contact Info Begin */}
                <div className="contact-info">
                  <h3>Contact Info</h3>
                  <p>Continue new you declared differed
                    learning bringing honoured.</p>
                  <div className="row">
                    {/* Single Contact Info */}
                    <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                      <div className="image">
                        <img src="assets/img/icons/location.svg" className="svg" alt="" />
                      </div>
                      <div className="media-body">
                        <h4>Office Location</h4>
                        <p>428 4th Floor Shubham Tower Neelam Bata Road Faridabad (Haryana), India</p>
                      </div>
                    </div>
                    {/* End Single Contact Info */}
                    {/* Single Contact Info */}
                    <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                      <div className="image">
                        <img src="assets/img/icons/phone.svg" className="svg" alt="" />
                      </div>
                      <div className="media-body">
                        <h4>Business Phone</h4>
                        <p><a tel={+919990013009}>+91-9990013009</a></p>
                      </div>
                    </div>
                    {/* End Single Contact Info */}
                    {/* Single Contact Info */}
                    <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                      <div className="image">
                        <img src="assets/img/icons/email.svg" className="svg" alt="" />
                      </div>
                      <div className="media-body">
                        <h4>Business Email</h4>
                        <p><a href="mailto:sales@weblabz.in">sales@weblabz.in </a>
                          <a href="mailto:info@weblabz.in ">info@weblabz.in</a>
                        </p>
                      </div>
                    </div>
                    {/* End Single Contact Info */}
                    {/* Single Contact Info */}
                    <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                      <div className="image">
                        <img src="assets/img/icons/email.svg" className="svg" alt="" />
                      </div>
                      <div className="media-body">
                        <h4>Office Hours</h4>
                        <p>Monday - Friday <br />
                          8:30 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                    {/* End Single Contact Info */}
                  </div>
                </div>
                {/* Contact Info End */}
              </div>
              <div className="col-lg-8">
                {/* Contact Form Begin */}
                <div id="form" className="contact-form-wrapper">
                  <h3>Send Us Message</h3>
                  <p>Our believe has request not how comfort evident. Up delight cousins we feeling
                    minutes. Genius has looked end piqued spring. Down has rose feel find man.</p>
                    <Form />
                    {/* <ReCAPTCHA
          sitekey={key}
          onChange={handle}
          
          />
                  Contact Form End */}
                </div>
              </div>
            </div>
          </div></section>
        {/* Contact Info End */}
        {/* Start Map */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7018.437397467598!2d77.3199224!3d28.4126571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2fd8e9670da430f6!2sWebLabz%3A-%20Digital%20Marketing%20Agency%20Faridabad!5e0!3m2!1sen!2sin!4v1593082630320!5m2!1sen!2sin" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
      
    </div>
  )
}
