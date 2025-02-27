import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <>
            <header>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/tapeonsale"}>Tape on Sale</NavLink>
                <NavLink to={"/musica"}>Música</NavLink>
                <NavLink to={"/fotos"}>Fotos</NavLink>
                <NavLink to={"/videos"}>Vídeos</NavLink>
                <NavLink to={"/eventos"}>Próximos eventos</NavLink>
            </header>
        </>
    );
}

export default Header;
