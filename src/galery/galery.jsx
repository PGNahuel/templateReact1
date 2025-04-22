import React from "react";
import t from "./../resources/translate"
import { useState } from "react";

const FilterItem = (props) => {
    const filter = props.Filter ? props.Filter : "*"

    const [active, setActive] = useState();

    const ClickActive = () => {
        setActive(!active);
    }

    return (
        <li onClick={ClickActive}>
            <a href="#" onClick={(e) => e.preventDefault()} className={"tm-gallery-link " + (active ? "active" : "")} data-filter={filter}>
                <i className={props.Icon + " fas fa-layer-group tm-gallery-link-icon"}></i>
                {props.Name}
            </a>
        </li>
    )
}

const Figure = (props) => {
    return (
        <figure className={"effect-honey tm-gallery-item " + props.Tag}>
            <img src={props.Tumbnails} alt={props.Alt} />
            <figcaption>
                <h2><i>{props.Title}</i></h2>
                <a href={props.Src}>{t("VIEW_MORE")}</a>
            </figcaption>
        </figure>
    )
}

const Galery = () => {
    return (
        <div className="tm-section-wrap">
            <div className="tm-parallax" data-parallax="scroll" data-image-src="img/img-02.jpg"></div>
            <section id="gallery" className="tm-section">
                <h2 className="tm-text-primary">{t("GALERY")}</h2>
                <hr className="mb-5"></hr>
                <ul className="tm-gallery-links">
                    <FilterItem Name="All" Filter="*" Icon="fa-portrait" />
                    <FilterItem Name="Retratos" Filter="portrait" Icon="fa-portrait" />
                    <FilterItem Name="Naturaleza" Filter="nature" Icon="fa-leaf" />
                    <FilterItem Name="Animales" Filter="animal" Icon="fa-paw" />
                    <FilterItem Name="Construcciones" Filter="building" Icon="fa-building" />
                </ul>

                <div className="tm-gallery">
                <Figure Src="img/gallery/portrait-01.jpg" Tumbnails="img/gallery/tn/portrait-01.jpg" Alt="Image" Title="Dreamy Honey iasdodisjaiosd saoisdajoisda dsaoin" Tag="portrait" />
                    <Figure Src="img/gallery/building-01.jpg" Tumbnails="img/gallery/tn/building-01.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/nature-01.jpg" Tumbnails="img/gallery/tn/nature-01.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/animal-01.jpg" Tumbnails="img/gallery/tn/animal-01.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                    <Figure Src="img/gallery/building-02.jpg" Tumbnails="img/gallery/tn/building-02.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/nature-02.jpg" Tumbnails="img/gallery/tn/nature-02.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/portrait-02.jpg" Tumbnails="img/gallery/tn/portrait-02.jpg" Alt="Image" Title="Dreamy Honey" Tag="portrait" />
                    <Figure Src="img/gallery/animal-02.jpg" Tumbnails="img/gallery/tn/animal-02.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                    <Figure Src="img/gallery/building-03.jpg" Tumbnails="img/gallery/tn/building-03.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/portrait-03.jpg" Tumbnails="img/gallery/tn/portrait-03.jpg" Alt="Image" Title="Dreamy Honey" Tag="portrait" />
                    <Figure Src="img/gallery/animal-03.jpg" Tumbnails="img/gallery/tn/animal-03.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                    <Figure Src="img/gallery/nature-03.jpg" Tumbnails="img/gallery/tn/nature-03.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/animal-04.jpg" Tumbnails="img/gallery/tn/animal-04.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                    <Figure Src="img/gallery/building-04.jpg" Tumbnails="img/gallery/tn/building-04.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/nature-04.jpg" Tumbnails="img/gallery/tn/nature-04.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/portrait-04.jpg" Tumbnails="img/gallery/tn/portrait-04.jpg" Alt="Image" Title="Dreamy Honey" Tag="portrait" />
                    <Figure Src="img/gallery/animal-05.jpg" Tumbnails="img/gallery/tn/animal-05.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                    <Figure Src="img/gallery/building-05.jpg" Tumbnails="img/gallery/tn/building-05.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/portrait-05.jpg" Tumbnails="img/gallery/tn/portrait-05.jpg" Alt="Image" Title="Dreamy Honey" Tag="portrait" />
                    <Figure Src="img/gallery/nature-05.jpg" Tumbnails="img/gallery/tn/nature-05.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/nature-06.jpg" Tumbnails="img/gallery/tn/nature-06.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/animal-06.jpg" Tumbnails="img/gallery/tn/animal-06.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                    <Figure Src="img/gallery/building-06.jpg" Tumbnails="img/gallery/tn/building-06.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/portrait-06.jpg" Tumbnails="img/gallery/tn/portrait-06.jpg" Alt="Image" Title="Dreamy Honey" Tag="portrait" />
                    <Figure Src="img/gallery/nature-07.jpg" Tumbnails="img/gallery/tn/nature-07.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/portrait-07.jpg" Tumbnails="img/gallery/tn/portrait-07.jpg" Alt="Image" Title="Dreamy Honey" Tag="portrait" />
                    <Figure Src="img/gallery/animal-07.jpg" Tumbnails="img/gallery/tn/animal-07.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                    <Figure Src="img/gallery/building-07.jpg" Tumbnails="img/gallery/tn/building-07.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/portrait-08.jpg" Tumbnails="img/gallery/tn/portrait-08.jpg" Alt="Image" Title="Dreamy Honey" Tag="portrait" />
                    <Figure Src="img/gallery/building-08.jpg" Tumbnails="img/gallery/tn/building-08.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/nature-08.jpg" Tumbnails="img/gallery/tn/nature-08.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/animal-08.jpg" Tumbnails="img/gallery/tn/animal-08.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                    <Figure Src="img/gallery/building-09.jpg" Tumbnails="img/gallery/tn/building-09.jpg" Alt="Image" Title="Dreamy Honey" Tag="building" />
                    <Figure Src="img/gallery/nature-09.jpg" Tumbnails="img/gallery/tn/nature-09.jpg" Alt="Image" Title="Dreamy Honey" Tag="nature" />
                    <Figure Src="img/gallery/portrait-09.jpg" Tumbnails="img/gallery/tn/portrait-09.jpg" Alt="Image" Title="Dreamy Honey" Tag="portrait" />
                    <Figure Src="img/gallery/animal-09.jpg" Tumbnails="img/gallery/tn/animal-09.jpg" Alt="Image" Title="Dreamy Honey" Tag="animal" />
                </div>
            </section>

        </div>
    )
}

export default Galery;