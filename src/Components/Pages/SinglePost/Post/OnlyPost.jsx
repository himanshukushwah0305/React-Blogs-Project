import React from "react";
import style from "./onlypost.module.css";

const OnlyPost = () => {
  return (
    <div className={style.post}>
      <div className={style.postWrapper}>
        <img className={style.postImg} src="assets/image/1.jpg" alt="" />
        <h1 className={style.postTitle}>
          Lorem ipsum dolor sit amet.
          <div className={style.postEditContainer}>
            <i className={`${style.postIcon} fa-regular fa-pen-to-square`}></i>
            <i className={`${style.postIcon} fa fa-trash`}></i>
          </div>
        </h1>
        <div className={style.postTitleInfo}>
          <span className={style.postAuthor}>
            Author: <b>Dummy</b>
          </span>
          <span className={style.postDate}>Few Minutes Ago</span>
        </div>
        <p className={style.postDesc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
          repudiandae possimus alias enim sequi quasi explicabo, voluptatum amet
          autem, incidunt culpa nisi odio. Non alias dicta illum porro veritatis
          architecto reiciendis fugiat neque exercitationem excepturi quo veniam
          nulla eum beatae sapiente, nam nostrum qui deleniti. Excepturi
          molestiae facilis qui. Unde? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. A repudiandae possimus alias enim sequi quasi
          explicabo, voluptatum amet autem, incidunt culpa nisi odio. Non alias
          dicta illum porro veritatis architecto reiciendis fugiat neque
          exercitationem excepturi quo veniam nulla eum beatae sapiente, nam
          nostrum qui deleniti. Excepturi molestiae facilis qui. Unde? Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. A repudiandae
          possimus alias enim sequi quasi explicabo, voluptatum amet autem,
          incidunt culpa nisi odio. Non alias dicta illum porro veritatis
          architecto reiciendis fugiat neque exercitationem excepturi quo veniam
          nulla eum beatae sapiente, nam nostrum qui deleniti. Excepturi
          molestiae facilis qui. Unde? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. A repudiandae possimus alias enim sequi quasi
          explicabo, voluptatum amet autem, incidunt culpa nisi odio. Non alias
          dicta illum porro veritatis architecto reiciendis fugiat neque
          exercitationem excepturi quo veniam nulla eum beatae sapiente, nam
          nostrum qui deleniti. Excepturi molestiae facilis qui. Unde? Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. A repudiandae
          possimus alias enim sequi quasi explicabo, voluptatum amet autem,
          incidunt culpa nisi odio. Non alias dicta illum porro veritatis
          architecto reiciendis fugiat neque exercitationem excepturi quo veniam
          nulla eum beatae sapiente, nam nostrum qui deleniti. Excepturi
          molestiae facilis qui. Unde? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. A repudiandae possimus alias enim sequi quasi
          explicabo, voluptatum amet autem, incidunt culpa nisi odio. Non alias
          dicta illum porro veritatis architecto reiciendis fugiat neque
          exercitationem excepturi quo veniam nulla eum beatae sapiente, nam
          nostrum qui deleniti. Excepturi molestiae facilis qui. Unde?
        </p>
      </div>
    </div>
  );
};

export default OnlyPost;
