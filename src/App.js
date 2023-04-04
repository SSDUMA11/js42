import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import ArticleContext from "./components/article-context"



function App() {
  let EN = {
    title: 'NVIDIA news',
    news: 'NVIDIA Accelerated AI on Azure',
    description: 'Article description:',
    preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
    content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
    author: 'Author: Mike',
    published: 'Published: 06.12.2022',
    theme:'Theme: Video cards',
    btn_one: 'Mark as read',
    btn_two: 'Read',
    btn_two_2: 'Close',
    btn_three: 'Mark as unread',
    current_lang: 'EN'
  }
  let UA = {
    title: 'НОВИНИ NVIDIA ',
    news: 'Прискорений штучний інтелект NVIDIA в Azure',
    description: 'Опис статті:',
    preview: 'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
    content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
    author: 'Автор: Майк',
    published: 'Опубліковано: 06.12.2022',
    theme:'Тема: відео карти',
    btn_one: 'Прочитано',
    btn_two: 'Читати',
    btn_two_2: 'Закрити',
    btn_three: 'Не прочитано',
    current_lang: 'UA'
  }
  const article = {
    description: 'Article description:',
    preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
    content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
  }

  

  const storedLang = localStorage.getItem('lang');

  const [lang, setLang] = useState(storedLang === 'UA' ? UA : EN);

  useEffect(() => {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns[lang.current_lang === 'UA' ? 0 : 1].classList.add('active');
  }, [lang]);

  const changeLang = (newLang) => {
    setLang(newLang);
  };


  // useEffect(() => {
  //   if (lang !== storedLang) {
  //     localStorage.setItem('lang', lang.current_lang);
  //     const langBtns = document.querySelectorAll('.lang-btn');
  //     langBtns.forEach(btn => btn.classList.remove('active'));
  //     langBtns[lang.current_lang === 'UA' ? 0 : 1].classList.add('active');
  //   }
  // }, [lang]);

  const toggleArticle = () => {
    setIsShow(!isShow)
  }

  // const markAsRead = () => {
  //   setIsRead(true);
  // };

  // const markAsUnread = () => {
  //   setIsRead(false);
  // };

  const [isShow, setIsShow] = useState(false);
  // const [isRead, setIsRead] = useState(false);

 
  return (
    <div className="wrapper">
      <ArticleContext.Provider value={lang}>
        <h1 className="title">{lang.title}</h1>
        <div className="article">
          <Article show={isShow} text={article}>
            <div className="article__title">
              <h2>{lang.news}</h2>
            </div>
          </Article>
          <div className="article__actions">
          <button onClick={markAsRead} className="article__btn">{lang.btn_one}</button>
          <button onClick={toggleArticle} className="article__btn">{isShow ? lang.btn_two_2 : lang.btn_two }</button>
          <button onClick={markAsUnread} className="article__btn">{lang.btn_three}</button>
        </div>
      </div>
      <div className="lang">
        <button className="lang-btn" onClick={() => changeLang(UA)}>UA</button>
        <button className="lang-btn" onClick={() => changeLang(EN)}>EN</button>
      </div>
      </ArticleContext.Provider>
    </div> 
    );
  }
export default App;