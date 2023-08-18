import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import Clock from "./Clock/Clock";
const NavBar = () => {
  const user = true;
  return (
    <div className={style.nav}>
      <div className={style.leftBox}>
        <Clock />
      </div>
      <div className={style.centerBox}>
        <ul className={style.navBarList}>
          <li className={style.listItems}>
            <Link to="/home" className="link">HOME</Link>
          </li>
          <li className={style.listItems}>
          <Link to="/write" className="link">WRITE</Link></li>
          <li className={style.listItems}>
          <Link to="/contact" className="link">CONTACT</Link></li>
          <li className={style.listItems}>
          <Link to="/login" className="link">ABOUT</Link></li>
          <li className={style.listItems}>
          {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className={style.rightBox}>
        {
          user ? (
            <Link to="/settings"><img
            className={style.navImg}
            src="assets/image/user.jpg"
            alt="profile_picture"
          /></Link>
          ) : (
            <ul className={style.navBarList}>
              <li className={style.listItems}>
                <Link to="/login" className="link">LOGIN/REGISTER</Link>
              </li>
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default NavBar;
