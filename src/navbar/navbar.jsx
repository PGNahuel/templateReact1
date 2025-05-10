import React, {useEffect} from "react";
import NavBarItem from "./items";
import t from "./../resources/translate";
import $ from "jquery"

export default function Navigator({ Unload }) {
    useEffect(()=>{
        const navbarToggler = document.querySelector(".navbar-toggler");
        const newNavbarToggler = navbarToggler.cloneNode(true);
        navbarToggler.parentNode.replaceChild(newNavbarToggler, navbarToggler);

        newNavbarToggler.addEventListener("click", function(e) {
            document.querySelector(".tm-sidebar").classList.toggle("show");
            e.stopPropagation();
        });
    },[]);
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
                        <NavBarItem description={t("MAIN_CONTENT")} icon="fa-home" href="#home" onClick={() => Unload("#home")} />
                        <NavBarItem description={t("ARTICLES")} icon="fa-user-friends" href="#articles" onClick={() => Unload("#articles")} />
                        <NavBarItem description={t("CONTACT")} icon="fa-envelope" href="#contact" onClick={() => Unload("#contact")} />
                    </ul>
                </div>
                <div className="social-links">
                    <a target="_blank" href="https://x.com/NachoPNG" className="tm-social-link"><i className="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://instagram.com/_nacho.png" className="tm-social-link"><i className="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://youtube.com/NahuelGomez94" className="tm-social-link"><i className="fab fa-youtube"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/nahuel-g%C3%B3mez-a869617b" className="tm-social-link"><i className="fab fa-linkedin"></i></a>
                    <a target="_blank" href="https://www.ivoox.com/escuchar-audios-nahuel-gomez_al_15792872_1.html" className="tm-social-link"><i className="fa fa-podcast"></i></a>
                </div>
            </nav>

        </div>

    )
};