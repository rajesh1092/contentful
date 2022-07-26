import React from "react";

const Post = ({ article }) => {
  const { name, image, description } = article.fields;
  //   console.log(article.fields);
  const postDescription = description;
  return (
    <div className="post">
      <h2 className="title">{name}</h2>
      {image && (
        <img
          className="featuredImage"
          src={image.fields.file.url}
          alt={name}
          title={name}
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
    </div>
  );
};

export default Post;
