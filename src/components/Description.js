import React, {useContext} from "react";
import ArticleContext from "./article-context";

function Description(props) {

  const context = useContext(ArticleContext);

  let articleBodyClasses = `article__body ${props.isRead ? "read" : ""}`

  return (
    <div className={articleBodyClasses}>
      <h3 className="article__description">
        {context.description}
      </h3>
      <p className="article__text">
        {context.preview}
      </p>
    </div>
  );
}

export default Description;