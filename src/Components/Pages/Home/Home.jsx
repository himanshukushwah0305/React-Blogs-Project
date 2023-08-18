import React from "react";
import Header from "../../Header/Header";
import Posts from "../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.home}>
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
