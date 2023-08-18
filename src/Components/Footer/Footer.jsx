import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  const url = "#";
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.column}>
            <p className={style.heading}>About Us</p>
            <a className={style.links} href={url}>
              Aim
            </a>
            <a className={style.links} href={url}>
              Vision
            </a>
            <a className={style.links} href={url}>
              Testimonials
            </a>
          </div>
          <div className={style.column}>
            <p className={style.heading}>Services</p>
            <a className={style.links} href={url}>
              Blogs
            </a>
            <a className={style.links} href={url}>
              Reading Blogs
            </a>
            <a className={style.links} href={url}>
              Writing Blogs
            </a>
          </div>
          <div className={style.column}>
            <p className={style.heading}>Contact Us</p>
            <a className={style.links} href={url}>
              Mumbai
            </a>
            <a className={style.links} href={url}>
              Delhi
            </a>
            <a className={style.links} href={url}>
              Pune
            </a>
          </div>
          <div className={style.column}>
            <p className={style.heading}>Social Media</p>
            <a className={style.links} href={url}>
              Facebook
            </a>
            <a className={style.links} href={url}>
              Instagram
            </a>
            <a className={style.links} href={url}>
              Twitter
            </a>
            <a className={style.links} href={url}>
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
