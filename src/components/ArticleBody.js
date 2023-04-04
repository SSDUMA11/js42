import React, { useContext,  useState } from "react";
import ArticleContext from "./article-context";

function ArticleBody(props) {
  const [isRead, setIsRead] = useState(false);

  const markAsRead = () => {
    setIsRead(true);
  };
  const markAsUnread = () => {
    setIsRead(false);
    };
  const articleBodyClasses = `article__body ${isRead ? "read" : ""}`
  const context = useContext(ArticleContext);
  
  return (
    <div className={articleBodyClasses}>
      <h3 className="article__description">
        {!props.show && context.description}
      </h3>
      <p className="article__text">
        {props.show ? context.content : context.preview}
      </p>
      
        {/* <button className="read-button" onClick={markAsRead}>
          Mark as read
        </button>
    
        <button className="read-button" onClick={markAsUnread}>
          Mark as unread
        </button> */}
      
    </div>
  );
}

export default ArticleBody;