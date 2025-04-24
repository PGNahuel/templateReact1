import React, { useEffect, useState } from "react";
import t from "./../resources/translate"
import $ from 'jquery';
import "magnific-popup";
import { marked } from "marked";

export async function fetchAndParseMarkdown(filePath) {
    try {
        const res = await fetch(filePath);
        if (!res.ok) throw new Error(`Error loading file: ${filePath}`);
        const markdown = await res.text();
        const html = marked.parse(markdown); // convierte a HTML
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
            title: f.title,
            author: f.author,
            content: html
        };
    }));

    return articles;
}

const Article = (props) => {
    let author = props.Author ? props.Author : t("UNKNOW");

    const contenido = `<div class="popUpMagnific">
    ${props.Content}
</div>`;

    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    useEffect(() => {
        $('.simple-ajax-popup-align-top').magnificPopup({
            type: 'ajax',
            alignTop: true,
            overflowY: 'scroll'
        });
    }, []);

    return (
        <div className="news-card">
            <a className="simple-ajax-popup-align-top" href={url}>
                <img src="img/articule.png" className="news-image" />
            </a>
            <div className="news-content">
                <div className="news-title">
                    <a className="simple-ajax-popup-align-top" href={url}>{props.Title}</a>
                </div>
                <div className="news-author">Por <span className="author-name">{author}</span></div>
            </div>
        </div>
    );
};

const PanelArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        importAllMarkdown().then(r => {
            const mapped = r.map(info => ({
                Title: info.title,
                Content: info.content,
                Author: info.author,
            }));
            setArticles(mapped);
        }).catch(err => {
            console.error("Error loading articles:", err);
        });
    }, []);

    return (
        
        <div className="tm-section-wrap">
            <div className="tm-parallax" data-parallax="scroll" data-image-src="img/brainstrom.png"></div>
            <div className="tm-section">
            <h2 className="tm-text-primary" id="articles">{t("ARTICLES")}</h2>
            <hr className="mb-5"></hr>

            <div className="news-container">
                {articles.map((a, index) => (
                    <Article key={index} Title={a.Title} Content={a.Content} Author={a.Author} />
                ))}
            </div>
            </div>
        </div>
    )
}

export default PanelArticles;