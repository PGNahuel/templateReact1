import './App.css';
import React, { useState } from "react";
import Navigator from './navbar/navbar';
import PanelArticles from './listproject/ListProjects';
import DetailContnet from "./detailcontent/DetailContent";
import PanelContact from './contact/panelContact';
import MainContent from './maincontent/maincontent';

function App() {
    const [articuloSeleccionado, setArticuloSeleccionado] = useState(null);

    const seleccionarArticulo = (articulo) => {
        setArticuloSeleccionado(articulo);
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    };

    const volverALista = (elementoScroll) => {
        setArticuloSeleccionado(null);

        setTimeout(() => {
            const elemento = document.querySelector(elementoScroll);
            if (elemento) {
                elemento.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <Navigator Unload={volverALista} />
                <div className="tm-main">
                    {(!articuloSeleccionado) ? (
                        <>
                            <MainContent />
                            <PanelArticles Load={seleccionarArticulo} />
                            <PanelContact
                                Phone="541136695771"
                                Email="pgnahuel@gmail.com"
                                Instagram="_nacho.png"
                                X="NachoPNG"
                                Youtube="NahuelGomez94"
                                Linkedin="nahuel-g%C3%B3mez-a869617b"
                                Podcast="escuchar-audios-nahuel-gomez_al_15792872_1.html" />
                        </>
                    ) : (
                        <DetailContnet Articulo={articuloSeleccionado} Volver={volverALista} />
                    )}

                </div>
            </div>
        </div>
    );
}

export default App;
