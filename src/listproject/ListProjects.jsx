import React from "react";
import ProjectItem from "./projectItem";

export default function PanelArticles() {
    return (
        <div className="tm-section-wrap">
        <div className="tm-parallax" data-parallax="scroll" data-image-src="img/brainstrom.png"></div>
        <div id="about" className="tm-section">
            <h2 className="tm-text-primary">About Upright CSS Template</h2>
            <hr className="mb-5"/>
            
            <div className="row tm-row-about">
                <div className="tm-col-about tm-col-about-l">
                    <p className="mb-4">
                If you want to support TemplateMo, you can contribute <a rel="sponsored" href="https://paypal.me/templatemo" target="_parent">a small donation via <strong>PayPal</strong></a>. This will be very helpful. Thank you. </p>
                    <p className="mb-4">
                        Aliquam ornare varius erat vel aliquet. Proin ac neque a tortor tristique semper eget eget sapien. Morbi vitae diam a odio lobortis mattis sed nec justo. 
                    </p>
                    <p className="mb-4">
                        Suspendisse sagittis tortor vel turpis aliquet, vitae molestie erat luctus.
                    </p>
                </div>
                <div className="tm-col-about tm-col-about-r">
                    <img src="img/img-about-01.jpg" alt="Image" className="img-fluid mb-5 tm-img-about"/>
                    <p>
                        Duis fringilla eget purus luctus sodales. Sed auctor odio quis ligula dignissim efficitur vitae vitae quam.
                    </p>
                </div>
            </div>
            <div className="mt-5">
                <div className="tm-carousel">
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
            </div>
        </div>
    </div>
    )
}