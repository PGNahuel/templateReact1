import React, {useEffect, useRef } from "react"

import mermaid from 'mermaid';

export default function DetailContent({Articulo, Volver}) {
    useEffect(()=>{
        mermaid.initialize({ startOnLoad: false });
        mermaid.run({
            nodes: [...document.getElementsByClassName("mermaid")],
        });
    },[]);

    return (
        <div className="maincontent">
            <div className="banner">
                <img className="contentbanner" src={"img/img-"+Articulo.Img}></img>
                </div>
            <div>
                <h2 className="tm-text-primary" id="articles">{Articulo.Title}</h2>
                <hr className="mb-5"></hr>
                <div className="detail-content" dangerouslySetInnerHTML={{ __html: Articulo.Content }} />
            </div>
            <span onClick={Volver} className="volverBtn">Volver</span>
        </div>
    )
}