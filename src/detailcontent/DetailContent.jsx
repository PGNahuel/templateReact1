import react from "react"

export default function DetailContent({Articulo, Volver}) {
    return (
        <div className="tm-section-wrap">
            <div className="tm-parallax" data-parallax="scroll" data-image-src={"img/"+Articulo.Img}></div>
            <div className="tm-section">
                <h2 className="tm-text-primary" id="articles">{Articulo.Title}</h2>
                <hr className="mb-5"></hr>
                <div class="detail-content" dangerouslySetInnerHTML={{ __html: Articulo.Content }} />
            </div>
            <span onClick={Volver} className="volverBtn">Volver</span>
        </div>
    )
}