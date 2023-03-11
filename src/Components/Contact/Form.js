
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react'


 function Form() {
 
 useEffect(()=>{
  setTimeout(() =>{
    console.log('clicked')
    window.grecaptcha.render('g-recaptcha', {
       sitekey: "6Lc00uskAAAAAFfvk5Dmm8HlL8FqZU5OPqsoXemB",
       callback: function(resp){}
    });
  },30);
 },[])
  
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [company,setCompany]=useState('')
  const [phone,setPhone]=useState('');
  const [message,setMessage]=useState(''); 
  const [success, setSuccess] = useState(false);
  const [checkbox,setCheckbox]=useState(false)
  const handleSubmit=()=>{


    // console.log("sdfsdsdsds============>",document.getElementById('recaptcha').checked=='false')
    if (name.length === 0) {
      alert("Name has left Blank!");
    } else if (phone.length === 0) {
      alert("Phone Number has left Blank!");
    } else if (email.length === 0) {
      alert("Email has left Blank!");
    } else if (message.length === 0) {
      alert("Message has left Blank!");
    } else if (company.length === 0) {
      alert("Company Name has left Blank!");
    }else if(!checkbox){
      alert('ARE YOU A ROBOT!!!')

    }
    else{
  
    const url='http://localhost/weblabz_in/php/form.php'; 
    //const url = 'https://weblabz.in/php/form.php';
    let fData=new FormData();
    fData.append('name',name);
    fData.append('email',email)
    fData.append('company',company)
    fData.append('phone',phone)
    fData.append('message',message)
    axios.post(url,fData)  .then((response) => setSuccess(true)).then(()=>{
      setName('')
      setEmail('')
      setCompany('')
      setPhone('')
      setMessage('')
    }).catch(err=>alert(err))
  }
}
  return (
    <div>
          <form className="contact-form">
        <div className="row">
        {success && (
                <>
                  <div
                    class="alert alert-success alert-dismissible fade show col-lg-12"
                    role="alert"
                  >
                    DATA SAVED <strong> SUCCESSFULLY</strong>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </>
              )}
          <div className="col-md-6"> <input type="text" name="name" className="theme-input-style" placeholder="Your Name" required  value={name} onChange={(e)=>{setName(e.target.value)}}/> </div>

          <div className="col-md-6"> <input type="email" name="email" className="theme-input-style" placeholder="Your Email" required  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> </div>

          <div className="col-md-6"> <input type="text" name="company" className="theme-input-style" placeholder="Company Name"  value={company} onChange={(e)=>{setCompany(e.target.value)}}/> </div>

          <div className="col-md-6"> <input type="tel" name="phone" className="theme-input-style" placeholder="Phone"  value={phone} onChange={(e)=>{setPhone(e.target.value)}} /> </div>

          <div className="col-12"> <textarea name="message" className="theme-input-style" required defaultValue={""}  value={message} onChange={(e)=>{setMessage(e.target.value)}}/> </div>
         
         <div className="col-12"> <div class="g-recaptcha" id='g-recaptcha' data-sitekey="6Lc00uskAAAAAFfvk5Dmm8HlL8FqZU5OPqsoXemB"></div> </div>
          <div className="col-12"> <button type="button" value="submit" className="btn" onClick={handleSubmit}><span>Submit</span></button>
          </div>
          
        </div>
      </form>
    </div>
  )
}
export default memo(Form)