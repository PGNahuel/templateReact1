import React, { useEffect, useState } from "react";
import t from "./../resources/translate";
import { marked } from "marked";

function escapeHtml(html) {
    return html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

const renderer = new marked.Renderer();

renderer.code = function (code, infostring, escaped) {
    const lang = (code.lang || "").trim();
    const safeCode = typeof code.text === "string" ? code.text : String(code.text);

    console.log(code);

    if (lang === "mermaid") {
        return `<pre class="mermaid">\n${safeCode}\n</pre>`;
    }

    return `<pre><code class="language-${lang}">${escapeHtml(safeCode)}</code></pre>`;
};

marked.setOptions({
    renderer,
    gfm: true,
    breaks: true,
    langPrefix: 'language-',
});


export async function fetchAndParseMarkdown(filePath) {
    try {
        const res = await fetch(filePath);
        if (!res.ok) throw new Error(`Error loading file: ${filePath}`);
        const markdown = await res.text();
        const html = marked.parse(markdown);
        return html;
    } catch (err) {
        console.error("Error fetching markdown:", err);
        return "<p>Error loading content</p>";
    }
}

async function importAllMarkdown() {
    const res = await fetch('./articules/index.json');
    const filenames = await res.json();

    const articles = await Promise.all(filenames.map(async f => {
        const html = await fetchAndParseMarkdown(`./articules/${f.file}`);
        return {
            id: f.id,
            title: f.title,
            author: f.author,
            content: html,
            img: f.img
        };
    }));

    return articles;
}

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
        importAllMarkdown().then(r => {
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