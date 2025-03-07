import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="homeContainer">
            <video autoPlay loop muted playsInline className="backgroundVideo">
                <source src="./assets/fondoHome.mp4" type="video/mp4" />
                Tu navegador no soporta videos en HTML5.
            </video>

            <h1>Tape on Sale</h1>
            <h2>No vendemos cintas</h2>
        </div>
    );
}

export default Home;
