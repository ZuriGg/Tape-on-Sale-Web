import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="homeContainer">
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url(./assets/fondoHome.gif)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.3,
                    zIndex: -1,
                }}
            />

            <h1>Tape on Sale</h1>
            <h2>No vendemos cintas</h2>
        </div>
    );
}

export default Home;
