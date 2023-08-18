import React, { useState } from "react";
import style from "./writepost.module.css";

const WritePost = () => {
  const [selectedImg, setSelectedImg] = useState("assets/image/4.jpg");

  const handleChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.includes("image")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImg(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImg("");
      alert("Please select an image");
    }
  };
  return (
    <div className={style.writePostContainer}>
      <div className={style.writePostImgContainer}>
        <img className={style.writePostImg} src={selectedImg} alt="writeImg" />
      </div>
      <div className={style.writeFormContaienr}>
        <form className={style.writeForm}>
          <div className={style.formGrp}>
            <label htmlFor="fileInput" className={style.writeFormIcon}>
              <i className={`fa-solid fa-plus`}></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleChange}
            />
            <input
              className={style.formInputTitle}
              type="text"
              placeholder="Title"
              autoFocus={true}
            />
          </div>
          <div className={style.formGrp}>
            <textarea
              className={style.formInputTextarea}
              placeholder="Write Your Story"
              rows={5}
            ></textarea>
          </div>
          <button className={style.formSubmitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WritePost;
