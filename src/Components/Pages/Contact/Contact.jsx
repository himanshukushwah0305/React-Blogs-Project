import React from "react";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.wrapper}>
        <div className={style.leftSide}>
          <div className={style.heading}>
            <h2>Contact Us</h2>
          </div>
          <div className={style.info}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est at
              dignissimos molestiae perspiciatis deserunt illo error ipsam,
              nulla ad quam?
            </p>
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.contactForm}>
            <form className={style.formWrapper}>
              <div className={style.inputDiv}>
                <input
                  type="text"
                  name="fullname"
                  className={style.inputHandle}
                  placeholder="Enter Your Full Name..."
                />
                </div>
                <div className={style.inputDiv}>
                <input
                  type="email"
                  name="email"
                  className={style.inputHandle}
                  placeholder="Enter Your Mail..."
                />
                </div>
              <div className={style.inputTextarea}>
                <textarea
                  name="message"
                  className={style.textareaInput}
                  placeholder="Type Your Message"
                ></textarea>
              </div>
              <button className={style.formButton}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
