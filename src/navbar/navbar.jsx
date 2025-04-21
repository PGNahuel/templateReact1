import React from "react";
import NavBarItem from "./items";

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
                        <NavBarItem description="Inicio" icon="fa-home" href="#home" />
                        <NavBarItem description="Galeria" icon="fa-images" href="#gallery" />
                        <NavBarItem description="Acerca de mi" icon="fa-user-friends" href="#about" />
                        <NavBarItem description="Contacto" icon="fa-envelope" href="#contact" />
                    </ul>

                </div>
            </nav>
        </div>

    )
};