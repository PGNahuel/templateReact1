import React from "react";
import NavBarItem from "./items";
import t from "./../resources/translate"

export default function Navigator() {
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
                        <NavBarItem description={t("MAIN_CONTENT")} icon="fa-home" href="#home" />
                        <NavBarItem description={t("ARTICLES")} icon="fa-user-friends" href="#articles" />
                        <NavBarItem description={t("GALERY")} icon="fa-images" href="#gallery" />
                        <NavBarItem description={t("CONTACT")} icon="fa-envelope" href="#contact" />
                    </ul>

                </div>
            </nav>
        </div>

    )
};