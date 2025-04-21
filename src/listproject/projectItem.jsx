import React from "react";

export default function ProjectItem() {
    return (
        <div className="tm-carousel-item">
            <figure className="effect-honey mb-4">
                <img src="img/about-01.jpg" alt="Featured Item" />
                <figcaption>
                    <ul className="tm-social">
                        <li><a href="https://facebook.com" className="tm-social-link"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </figcaption>
            </figure>
            <div className="tm-about-text">
                <h3 className="mb-3 tm-text-primary tm-about-title">Calvin Walk</h3>
                <p>Aliquam efficitur, velit ut aliquet molestie, nulla dolor faucibus neque, quis hendrerit.</p>
                <h4 className="tm-text-secondary tm-about-subtitle">Founder and CEO</h4>
            </div>
        </div>
    )
}