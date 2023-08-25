import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        return (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            time={minuteRounder(post.minutes)}
          />
        );
      })}
    </main>
  );
}

function minuteRounder(minutes) {
  let emoji;
  let divider;

  if (minutes < 30) {
    emoji = "☕️";
    divider = 5;
  } else {
    emoji = "🍱";
    divider = 10;
  }

  const numEmoji = Math.floor(minutes / divider);
  let emojiString = "";

  for (let i = 0; i < numEmoji; i++) {
    emojiString += emoji;
  }

  return `${emojiString} ${minutes} min read`;
}

export default ArticleList;
