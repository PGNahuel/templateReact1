import React from "react";
import t from "./../resources/translate";
import ResumeMainItem from "./resumeItemContent";

export default function MainContent() {
    let articles = [
        {
            title: "Titulo uno"
            , date: "21 de abril del 2025"
            , resume: "loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa "
            , icon: "fa-scroll"
        },
        {
            title: "Este es otro titulo"
            , date: "21 de abril del 2025"
            , resume: "loren ipsum opaopaloren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa "
            , icon: "fa-dove"
        },
        {
            title: "Opa con los titulos"
            , date: "21 de abril del 2025"
            , resume: "loren ipsum opaopaloren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa loren ipsum opaopa "
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