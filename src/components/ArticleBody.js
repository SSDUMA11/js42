import React, {useContext} from "react";
import ArticleContext from "./article-context";
import Description from "./Description";
import Content from "./Content";

function ArticleBody(props) {

  const context = useContext(ArticleContext);

  return (
    <div>
       {!props.isShow && <Description isRead={props.isRead} isShow={props.isShow}  />}
       {props.isShow && <Content />}
    </div>
  );
}

export default ArticleBody;