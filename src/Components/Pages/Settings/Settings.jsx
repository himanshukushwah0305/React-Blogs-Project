import React from "react";
import style from "./settings.module.css";
import Sidebar from "../../Sidebar/Sidebar";

// import logo from "../../../assets/image/user.jpg";
const Settings = () => {
  return (
    <div className={style.settingsWrapper}>
      <div className={style.settings}>
        <div className={style.settingsTitle}>
          <span className={style.settingsTitleUpdate}>Update Your Account</span>
          <span className={style.settingsTitleDelete}>Delete Your Account</span>
        </div>
        <form className={style.settingsForm}>
          <label>Profile Picture</label>
          <div className={style.settingsProfile}>
            <img src="assets/image/user.jpg" alt="ProfilePicture" />
            <label htmlFor="fileInput">
              <span className={style.settingsProfileIcon}><i class="fa fa-circle-user"></i></span>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="Username">Username</label>
          <input type="text" placeholder="JohnDoe"/>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="johndoe@gmail.com"/>
          <label htmlFor="Password">Password</label>
          <input type="password" />
          <button className={style.settingsSubmit}>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
