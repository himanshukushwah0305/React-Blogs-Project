import React from "react";
import style from "./single.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import OnlyPost from "./Post/OnlyPost";

const Single = () => {
  return (
    <div className={style.singlePost}>
      <OnlyPost />
      <Sidebar />
    </div>
  );
};

export default Single;
