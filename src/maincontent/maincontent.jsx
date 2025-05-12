import React from "react";
import t from "./../resources/translate";

export default function MainContent() {
    return (
        <div class="tm-section-wrap">
                        <div className="tm-parallax" data-parallax="scroll" data-image-src="img/inews.webp"></div>

        <div class="profile-card">
            <div class="profile-image">
                <img src="/img/yo.webp" alt="Foto de perfil de Nahuel"></img>
            </div>
            <div class="profile-text">
                <p><strong>Hola, soy Nahuel. Trabajo como desarrollador backend y con los años me fui especializando en automatizar tareas y sacarle el jugo a cada proceso.</strong> Me gusta ir directo al grano, entender qué hace falta y resolverlo de la forma más clara y eficiente posible. En este espacio comparto ideas, aprendizajes y algunas soluciones que me sirvieron en la vida real, sin vueltas ni teorías de más.</p>
                
                <p>Si estás arrancando en el mundo del desarrollo o simplemente querés mejorar lo que ya venís haciendo, capaz te interese lo que vas a encontrar por acá. <strong>Hay artículos cortos, ejemplos prácticos y uno que otro experimento.</strong> La idea es que te lleves algo útil cada vez que pases.</p>
            </div>
        </div>
        </div>
    )
}