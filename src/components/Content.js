import React, {useContext} from "react";
import ArticleContext from "./article-context";

function Content() {

  const context = useContext(ArticleContext);

  return (
    <div className="article__body">

      <p className="article__text">
        {context.content}
      </p>

    </div>
  );
}

export default Content;