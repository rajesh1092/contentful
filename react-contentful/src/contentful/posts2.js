import React from "react";
import Post2 from "./post2";

const Posts2 = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((product, index) => (
        <Post2 article={product} key={index} />
      ))}
    </div>
  );
};

export default Posts2;
