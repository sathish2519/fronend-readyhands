import {React,useRef,useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const[done,setdone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6txkewi', 'template_90ymyvg', form.current, 'CEWykw54V6DflHcBV')
      .then((result) => {
          console.log(result.text);
          setdone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="contact-form" id="contact">
          {/* left side copy and paste from work section */}
          <div className="w-left">
            <div className="awesome">
              {/* darkMode */}
              <span style={{}}>Get in Touch</span>
              <span>Contact us</span>
              <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
              ></div>
            </div>
          </div>
          {/* right side form */}
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
            
              <input type="text" name="user_name" className="user"  placeholder="Name"/>
              <input type="email" name="user_email" className="user" placeholder="Email"/>
              <textarea name="message" className="user" placeholder="Message"/>
              <input type="submit" value="Send" style={{background:'#F5C32C'}} className="button"/>
              <span>{done && "Thanks for Contacting us!"}</span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </div>
        </div>
      );
    };
    

export default Contact
