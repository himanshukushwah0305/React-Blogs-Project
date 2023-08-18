import React from "react";
import style from "./posts.module.css";
import PostData from "./Post/PostData";

const Posts = () => {
  return (
    <div className={style.posts}>
      <PostData />
    </div>
  );
};

export default Posts;
