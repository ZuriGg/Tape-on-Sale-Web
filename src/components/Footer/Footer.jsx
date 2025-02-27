import React from "react";
import "./Footer.css";
import { Outlet } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <p className="categoria">Contacto:</p>
                <p>tapeonsale@gmail.com</p>
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Amazon Music.jpg"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Apple Music.png"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/BandCamp.jpg"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Deezer.jpg"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/FaceBook.jpg"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Instagram.png"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Patreon.png"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Spotify.png"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Tidal.jpg"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/TikTok.jpg"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Youtube Music.jpg"
                    alt=""
                />
                <img
                    className="iconoFooter"
                    src="assets/img/Iconos/Youtube.png"
                    alt=""
                />
            </footer>
        </>
    );
}

export default Footer;
