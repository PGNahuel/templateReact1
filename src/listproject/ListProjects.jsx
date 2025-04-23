import React from "react";
import t from "./../resources/translate"

function importAllMarkdown() {
    const files = FileReader();
    
  
    const promises = Object.entries(files).map(async ([path, resolver]) => {
      const content = await resolver();
      const title = path.split('/').pop().replace('.md', '');
      return { title, content };
    });
  
    return Promise.all(promises);
  }

const GetArticles = ()=>{
    console.log(importAllMarkdown())
    return [
        {Title:"Ejemplo", Content:"Contenido de ejemplo :D"},
        {Title:"Ejemplo", Content:"Contenido de ejemplo :D"},
        {Title:"Ejemplo", Content:"Contenido de ejemplo :D"},
        {Title:"Ejemplo", Content:"Contenido de ejemplo :D"}
    ]
}

const Article = (props) => {
    let author = props.Author ? props.Author : t("UNKNOW")
    const contenido = `<div class="popUpMagnific">
    ${props.Content}
</div>;`

    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);


    return <div class="news-card">
        <a className="simple-ajax-popup-align-top" href={url}><img src="img/articule.png" className="news-image" /></a>
        <div className="news-content">
            <div className="news-title">
                <a className="simple-ajax-popup-align-top" href={url}>{props.Title}</a>
            </div>
            <div className="news-author">Por <span className="author-name">{author}</span></div>
        </div>
    </div>
}

const PanelArticles = () => {
    return (
        <div className="tm-section-wrap">
            <div className="tm-parallax" data-parallax="scroll" data-image-src="img/brainstrom.png"></div>
            <h2 className="tm-text-primary" id="articles">{t("ARTICLES")}</h2>
            <hr className="mb-5"></hr>

            <div class="news-container">
                {GetArticles().map(a => {
                    return <Article Title={a.Title} Content={a.Content} />
                })}
            </div>

        </div>
    )
}

export default PanelArticles;