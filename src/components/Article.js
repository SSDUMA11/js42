import React, {useContext} from "react";
import ArticleContext from "./article-context";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
  const context = useContext(ArticleContext);
    return (
    <>
    {context.children}
    <ArticleBody show={props.show} text={context.text} />
    <ArticleAuthor /> 
    </>
    );
  }
  export default Article;


