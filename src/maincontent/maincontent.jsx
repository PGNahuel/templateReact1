import React from "react";
import t from "./../resources/translate";

export default function MainContent() {
    return (
        <div className="tm-section-wrap">
            <div className="tm-parallax" data-parallax="scroll" data-image-src="img/img-01.jpg"></div>
            <div id="home" className="tm-section">
                <h2 className="tm-text-primary">{t("MAIN_CONTENT")}</h2>
                <hr className="mb-5"></hr>
                <div className="row tm-row-home">
                    <div className="tm-col-home tm-col-home-l">
                        <div className="media mb-4">
                            <i className="fas fa-scroll fa-4x tm-post-icon tm-text-primary"></i>
                            <div className="media-body">
                                <a href="#" className="d-block mb-2 tm-text-primary tm-post-link">24 September 2020</a>
                                <p>
                                    Upright is free responsive HTML CSS template by <a href="https://templatemo.com/page/1" target="_parent" rel="sponsored">TemplateMo</a>.
                                    You can feel free to adapt and apply this layout for your
                                    commercial or non-commercial websites. </p>
                            </div>
                        </div>
                        <div className="media mb-4">
                            <i className="fas fa-cloud-sun fa-4x tm-post-icon tm-text-primary"></i>
                            <div className="media-body">
                                <a href="#" className="d-block mb-2 tm-text-primary tm-post-link">22 September 2020</a>
                                <p>
                                    You are not allowed to re-distribute this template as a ZIP file
                                    on any template collection website for the template download purpose.
                                    Please contact us for more information.
                                </p>
                            </div>
                        </div>
                        <div className="media mb-4">
                            <i className="fas fa-dove fa-4x tm-post-icon tm-text-primary"></i>
                            <div className="media-body">
                                <a href="#" className="d-block mb-2 tm-text-primary tm-post-link">16 September 2020</a>
                                <p>
                                    You may want to support us by making   <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a small donation via PayPal</a>. That will be helpful. We hope you like this Upright Template for your work.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tm-col-home mr-0 ml-auto">
                        <div className="tm-img-home-container"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}