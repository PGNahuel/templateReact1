import React, { useEffect, useState } from "react";
import t from "./../resources/translate";
import importer from "./ImporterMD";

const Article = (props) => {
    let author = props.Author ? props.Author : t("UNKNOW");

    const img = props.Img ? props.Img : "articule.webp";

    return (
        <div className="news-card" onClick={props.onClick}>
            <a className="simple-ajax-popup-align-top" >
                <img src={"img/"+img} className="news-image" />
            </a>
            <div className="news-content">
                <div className="news-title">
                    <span className="simple-ajax-popup-align-top">{props.Title}</span>
                </div>
                <div className="news-author">Por <span className="author-name">{author}</span></div>
            </div>
        </div>
    );
};

const PanelArticles = ({Load}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
            importer.importAllMarkdown().then(r => {
            const mapped = r.map(info => ({
                Title: info.title,
                Content: info.content,
                Author: info.author,
                Img: info.img,
                Id: info.id
            }));
            setArticles(mapped);
        }).catch(err => {
            console.error("Error loading articles:", err);
        });
    }, []);

    return (
        <div className="tm-section-wrap" id="articles">
            <div className="tm-parallax" data-parallax="scroll" data-image-src="img/brainstrom.webp" id="imgArticules"></div>
            <div className="tm-section">
            <h2 className="tm-text-primary">{t("ARTICLES")}</h2>
            <hr className="mb-5"></hr>

            <div className="news-container">
                {articles.map((a) => (
                    <Article key={a.Id} Title={a.Title} Content={a.Content} Author={a.Author} Img={"tm-"+a.Img} onClick={()=>{Load(a)}} />
                ))}
            </div>
            </div>
        </div>
    )
}

export default PanelArticles;