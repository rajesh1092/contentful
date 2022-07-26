import React from "react";
import Post from "./post";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};

export default Posts;
