import React, {useContext} from "react";
import ArticleContext from "./article-context";

function ArticleAuthor() {
  const context = useContext(ArticleContext);
  return (
      <div className="article__author">
        <p className="article__author--name">{context.author}</p>
        <p className="article__author--date">{context.published}</p>
        <p className="article__author--theme">{context.theme}</p>
      </div>
    );
  }
export default ArticleAuthor;