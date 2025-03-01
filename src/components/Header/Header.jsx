import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    const [showMedia, setShowMedia] = useState(false);
    const [showEvents, setShowEvents] = useState(false);
    const [showMore, setShowMore] = useState(false);

    return (
        <header>
            <NavLink to={"/"} activeClassName="active">
                Home
            </NavLink>
            <NavLink to={"/about"} activeClassName="active">
                Tape on Sale
            </NavLink>

            <div
                className="dropdown"
                onMouseEnter={() => setShowMedia(true)}
                onMouseLeave={() => setShowMedia(false)}
            >
                <span>Media</span>
                {showMedia && (
                    <div className="dropdown-content">
                        <NavLink to={"/musica"} activeClassName="active">
                            Música
                        </NavLink>
                        <NavLink to={"/videos"} activeClassName="active">
                            Vídeos
                        </NavLink>
                        <NavLink to={"/fotos"} activeClassName="active">
                            Fotos
                        </NavLink>
                    </div>
                )}
            </div>

            <div
                className="dropdown"
                onMouseEnter={() => setShowEvents(true)}
                onMouseLeave={() => setShowEvents(false)}
            >
                <span>Eventos y Merch</span>
                {showEvents && (
                    <div className="dropdown-content">
                        <NavLink to={"/eventos"} activeClassName="active">
                            Próximos eventos
                        </NavLink>
                        <NavLink to={"/merchandising"} activeClassName="active">
                            Merch
                        </NavLink>
                    </div>
                )}
            </div>

            <div
                className="dropdown"
                onMouseEnter={() => setShowMore(true)}
                onMouseLeave={() => setShowMore(false)}
            >
                <span>Más</span>
                {showMore && (
                    <div className="dropdown-content">
                        <NavLink to={"/contacto"} activeClassName="active">
                            Contacto
                        </NavLink>
                        <NavLink to={"/social-media"} activeClassName="active">
                            Social Media
                        </NavLink>
                        <NavLink to={"/FAQ"} activeClassName="active">
                            FAQ
                        </NavLink>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
