import React from "react";

// import logo from "../../assets/image/user.jpg";
import style from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.titleDiv}>
        <span className={style.itemsTitle}>ABOUT ME</span>
      </div>

      <div className={style.mainDiv}>
        <div className={style.sidebarItems}>
          <img className={style.sidebarImage} src="assets/image/user.jpg" alt="profile" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            odio adipisci quia aliquid neque fugiat recusandae consequatur saepe
            quaerat corrupti.
          </p>
        </div>

        <div className={style.rightSidebarItems}>
          <div className={style.sidebarItems}>
            <div className={style.titleDiv}>
              <span className={style.itemsCate}>CATEGORIES</span>
            </div>
            <ul className={style.sidebarList}>
              <li className={style.sidebarListItems}>Tech</li>
              <li className={style.sidebarListItems}>Music</li>
              <li className={style.sidebarListItems}>Movies</li>
              <li className={style.sidebarListItems}>Sports</li>
              <li className={style.sidebarListItems}>LifeStyle</li>
            </ul>
          </div>

          <div className={style.sidebarItems}>
            <div className={style.titleDiv}>
              <span className={style.itemsTitle}>FOLLOW US</span>
            </div>
            <div className={style.sidebarSocial}>
              <i className={` ${style.sidebarIcon} fa-brands fa-facebook`}></i>
              <i className={` ${style.sidebarIcon} fa-brands fa-twitter`}></i>
              <i className={` ${style.sidebarIcon} fa-brands fa-pinterest`}></i>
              <i className={` ${style.sidebarIcon} fa-brands fa-instagram`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
