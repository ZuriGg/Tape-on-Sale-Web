import React from "react";
import "./Merch.css";

function Merch() {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url(./assets/img/eventosFondo.webp)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.4,
                    zIndex: -1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            ></div>
            <div className="merchContainer">
                <h3>Todavía no hay merchandising de Tape on Sale</h3>
            </div>
        </>
    );
}

export default Merch;
