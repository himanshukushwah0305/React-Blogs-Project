import React, { useState } from "react";
import Post from "./Post";

export const MyContext = React.createContext();

const PostData = () => {
  const intialData = [
    {
      id: "1",
      image: "assets/image/1.jpg",
      categories: ["Music", "LifeStyle"],
      title: "Lorem ipsum dolor sit amet.",
      date: "few minutes ago",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ratione ut deserunt! Quo illum libero vel sint error optio voluptates
          hic, facere, dolor in enim doloribus maxime similique amet fuga
          explicabo rerum quae voluptatum voluptatem iste quos minima. Repellat,
          quisquam porro. Unde atque ipsa, laudantium sed natus aliquam ut
          nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          nostrum debitis porro exercitationem vero ad laborum optio cupiditate
          quo reiciendis nobis, voluptates quis, saepe in quas qui placeat
          doloremque pariatur nesciunt praesentium. Doloribus in repellat vero
          beatae praesentium aperiam atque impedit sapiente repellendus, magnam
          odit quibusdam ratione, perferendis accusamus possimus.`,
    },
    {
      id: "2",
      image: "assets/image/2.jpg",
      categories: ["Music", "LifeStyle"],
      title: "Lorem ipsum dolor sit amet.",
      date: "few minutes ago",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ratione ut deserunt! Quo illum libero vel sint error optio voluptates
          hic, facere, dolor in enim doloribus maxime similique amet fuga
          explicabo rerum quae voluptatum voluptatem iste quos minima. Repellat,
          quisquam porro. Unde atque ipsa, laudantium sed natus aliquam ut
          nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          nostrum debitis porro exercitationem vero ad laborum optio cupiditate
          quo reiciendis nobis, voluptates quis, saepe in quas qui placeat
          doloremque pariatur nesciunt praesentium. Doloribus in repellat vero
          beatae praesentium aperiam atque impedit sapiente repellendus, magnam
          odit quibusdam ratione, perferendis accusamus possimus.`,
    },
    {
      id: "3",
      image: "assets/image/3.jpg",
      categories: ["Music", "LifeStyle"],
      title: "Lorem ipsum dolor sit amet.",
      date: "few minutes ago",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ratione ut deserunt! Quo illum libero vel sint error optio voluptates
          hic, facere, dolor in enim doloribus maxime similique amet fuga
          explicabo rerum quae voluptatum voluptatem iste quos minima. Repellat,
          quisquam porro. Unde atque ipsa, laudantium sed natus aliquam ut
          nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          nostrum debitis porro exercitationem vero ad laborum optio cupiditate
          quo reiciendis nobis, voluptates quis, saepe in quas qui placeat
          doloremque pariatur nesciunt praesentium. Doloribus in repellat vero
          beatae praesentium aperiam atque impedit sapiente repellendus, magnam
          odit quibusdam ratione, perferendis accusamus possimus.`,
    },
    {
      id: "4",
      image: "assets/image/4.jpg",
      categories: ["Music", "LifeStyle"],
      title: "Lorem ipsum dolor sit amet.",
      date: "few minutes ago",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ratione ut deserunt! Quo illum libero vel sint error optio voluptates
          hic, facere, dolor in enim doloribus maxime similique amet fuga
          explicabo rerum quae voluptatum voluptatem iste quos minima. Repellat,
          quisquam porro. Unde atque ipsa, laudantium sed natus aliquam ut
          nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          nostrum debitis porro exercitationem vero ad laborum optio cupiditate
          quo reiciendis nobis, voluptates quis, saepe in quas qui placeat
          doloremque pariatur nesciunt praesentium. Doloribus in repellat vero
          beatae praesentium aperiam atque impedit sapiente repellendus, magnam
          odit quibusdam ratione, perferendis accusamus possimus.`,
    },
  ];
  const [data, setData] = useState(intialData)
  return (
    <>
      <MyContext.Provider value={{ data, setData }}>
        <Post />
      </MyContext.Provider>
    </>
  );
};

export default PostData;
