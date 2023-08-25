import React from "react";

function Article({ title, date = "January 1, 1970", preview, time }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{time}</p>
    </article>
  );
}

export default Article;
