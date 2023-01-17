import { React, useRef, useState } from "react";

import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Linkedin from "../../img/linkedin.png";
import emailjs from "@emailjs/browser";
import download from "../../img/download.png";

import downloadpdf from "./cv.pdf";

import translate from "../../i18nProvider/translate";

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_re83ehp",
        "template_t2zetfz",
        formRef.current,
        "p-T0uKmLJHAzSukVT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-backround"></div>

      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-header">Contact Me</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <a href="https://www.linkedin.com/in/-emrah-yavuz/">
                <img src={Linkedin} alt="" className="contact-icon" />
                Linkedin
              </a>
            </div>
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +32 466 195 831
            </div>

            <div className="contact-info-item">
              <img src={Email} alt="" className="contact-icon" />
              emrahyavuz3225@gmail.com
            </div>
            <div className="contact-info-item">
              <a href="https://www.google.com/maps/place/Antwerp,+2000+Anvers/@51.2195463,4.3934155,15z/data=!3m1!4b1!4m5!3m4!1s0x47c3f5e038389465:0x1125d409660336fc!8m2!3d51.2195472!4d4.4021703">
                <img src={Address} alt="" className="contact-icon" />
                {translate("city")}/2000
              </a>
            </div>

            <div className="contact-info-item">
              <a href={downloadpdf} download>
                <img
                  src={download}
                  id="cv"
                  alt="download CV icon"
                  className="contact-icon"
                />
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h1 className="mail-header">Send Mail</h1>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />{" "}
            <input type="text" placeholder="Subject" name="user_subject" />{" "}
            <input type="text" placeholder="Email" name="user_email" />{" "}
            <textarea rows="10" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "your email successfully sent"}
            {error && "error occurred"}
            <div className="contact-bottom"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
