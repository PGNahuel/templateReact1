import React from "react";
import FormContact from "./form";
import t from "./../resources/translate"

export default function PanelContact(props) {
    const mapJoseMarmol = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13107.053242930078!2d-58.38071122631427!3d-34.786733393364905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd346291b7ef7%3A0x44b74d34162ac098!2sB1845%20Jos%C3%A9%20Marmol%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1745258660104!5m2!1ses-419!2sar";

    const title = props.title ? props.title : "Contacto";

    return (
        <div className="tm-section-wrap">
            <div className="tm-parallax" data-parallax="scroll" data-image-src="img/contacto.png"></div>
            <div id="contact" className="tm-section">
                <h2 className="tm-text-primary">{title}</h2>
                <hr className="mb-5" />
                <div className="row">
                    <div className="col-xl-6 tm-contact-col-l mb-4">
                        <FormContact/>
                    </div>
                    <div className="col-xl-6 tm-contact-col-r">
                        <div className="mapouter mb-4">
                            <div className="gmap_canvas">
                                    <iframe src={mapJoseMarmol}
                                      width="100%" height="520" id="gmap_canvas"
                                      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>

                        <div className="mb-4">
                            {props.AditionalInfo}
                        </div>

                        <ul className="tm-contact-links mb-4">
                            <li className="mb-2">
                                <a href="tel:0100200340">
                                    <i className="fas fa-phone mr-2 tm-contact-link-icon"></i>
                                    {t("PHONE")}: {props.Phone}
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@company.com">
                                    <i className="fas fa-at mr-2 tm-contact-link-icon"></i>
                                    {t("EMAIL")}: {props.Email}
                                </a>
                            </li>
                        </ul>
                        <ul className="tm-contact-social">
                            {props.Facebook ? <li><a target="_blank" href={"https://fb.com/" + props.Facebook} className="tm-social-link"><i className="fab fa-facebook"></i></a></li> : ""}
                            {props.X ? <li><a target="_blank" href={"https://x.com/" + props.X} className="tm-social-link"><i className="fab fa-twitter"></i></a></li> : ""}
                            {props.Instagram ? <li><a target="_blank" href={"https://instagram.com/" + props.Instagram} className="tm-social-link"><i className="fab fa-instagram"></i></a></li> : ""}
                            {props.Youtube ? <li><a target="_blank" href={"https://youtube.com/" + props.Youtube} className="tm-social-link"><i className="fab fa-youtube"></i></a></li> : ""}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}