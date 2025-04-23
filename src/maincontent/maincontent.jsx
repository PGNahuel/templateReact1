import React from "react";
import t from "./../resources/translate";
import ResumeMainItem from "./resumeItemContent";

export default function MainContent() {
    let articles = [
        {
            title: "Crecé"
            , date: "23 de abril del 2025"
            , resume: "Acá voy a dar lo mejor de mi, documentarlo y subirlo de manera que puedas crecer profesionalmente. Si queres hablar conmigo, abajo tenes todos mis canales de contacto."
            , icon: "fa-dove"
        },
        {
            title: "Mi objetivo"
            , date: "23 de abril del 2025"
            , resume: "Con esta página busco centralizar el conocimiento que tengo y poder compartirlo con aquellos que les interese, además de tener un lugar donde mostrar lo que hago y cómo lo hago."
            , icon: "fa-scroll"
        },
        {
            title: "Como va pintando la cosa"
            , date: "23 de abril del 2025"
            , resume: "La verdad que como backender pareciera que no avanzo, por la verdad es que sí. Hay muchas cosas por hacer, muchas que diseñar, muchas que mostrar. Es un clima soleado, ventoso y en un terreno nuevo."
            , icon: "fa-cloud-sun"
        }
    ];

    return (
        <div className="tm-section-wrap">
            <div className="tm-parallax" data-parallax="scroll" data-image-src="img/inews.png"></div>
            <div id="home" className="tm-section">
                <h2 className="tm-text-primary">{t("MAIN_CONTENT")}</h2>
                <hr className="mb-5"></hr>
                <div className="row tm-row-home">
                    <div className="tm-col-home tm-col-home-l">
                        {
                            articles.map((articule, index) => {
                                return <ResumeMainItem 
                                Key={index} 
                                Date={articule.date} 
                                Icon={articule.icon} 
                                Resume={articule.resume}
                                Title={articule.title}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}