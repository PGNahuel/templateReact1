import React, {useEffect} from "react"

export default function DetailContent({Articulo, Volver}) {
    return (
        <div className="maincontent">
            <div className="banner">
                <img class="contentbanner" src={"img/img-"+Articulo.Img}></img>
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