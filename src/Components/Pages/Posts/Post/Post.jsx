import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./post.module.css";
import { MyContext } from "./PostData";

const Post = () => {
  const dataContext = useContext(MyContext);
  const { data, setData } = dataContext;
  return (
    <>
      {data.map((item) => (
        <div className={style.post} key={item.id}>
          <img className={style.postImg} src={item.image} alt="images" />
          <div className={style.postInfo}>
            <div className={style.postCats}>
              {item.categories.map((cat) => (
                <span className={style.postCat}>{cat}</span>
              ))}
              {/* <span className={style.postCat}>Music</span>
          <span className={style.postCat}>LifeStyle</span> */}
            </div>
            {/* <span className={style.postTitle}>{item.title}</span> */}
            <Link to={`/post/${item.id}`} className="postTitle">
              {item.title}
            </Link>
            <hr />
            <span className={style.postDate}>{item.date}</span>
          </div>
          <p className={style.postDesc}>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Post;
