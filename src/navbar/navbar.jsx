import React from "react";
import NavBarItem from "./items";
import t from "./../resources/translate"

export default function Navigator({Unload}) {
    return (
        <div id="tm-sidebar" className="tm-sidebar">
            <nav className="tm-nav">
                <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div>
                    <div className="tm-brand-box">
                        <h1 className="tm-brand">PG Nahuel</h1>
                    </div>
                    <ul id="tm-main-nav">
                        <NavBarItem description={t("MAIN_CONTENT")} icon="fa-home" href="#home" onClick={()=>Unload("#home")}/>
                        <NavBarItem description={t("ARTICLES")} icon="fa-user-friends" href="#articles" onClick={()=>Unload("#articles")}/>
                        <NavBarItem description={t("CONTACT")} icon="fa-envelope" href="#contact" onClick={()=>Unload("#contact")}/>
                    </ul>

                    <hr />

                    <center>
                        <ul className="tm-contact-social"><li><a target="_blank" href="https://x.com/NachoPNG" className="tm-social-link"><i className="fab fa-twitter"></i></a></li><li><a target="_blank" href="https://instagram.com/_nacho.png" className="tm-social-link"><i className="fab fa-instagram"></i></a></li><li><a target="_blank" href="https://youtube.com/NahuelGomez94" className="tm-social-link"><i className="fab fa-youtube"></i></a></li><li><a target="_blank" href="https://www.linkedin.com/in/nahuel-g%C3%B3mez-a869617b" className="tm-social-link"><i className="fab fa-linkedin"></i></a></li><li><a target="_blank" href="https://www.ivoox.com/escuchar-audios-nahuel-gomez_al_15792872_1.html" className="tm-social-link"><i className="fa fa-podcast"></i></a></li></ul>
                    </center>
                </div>
            </nav>
        </div>

    )
};