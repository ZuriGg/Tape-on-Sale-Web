import React from "react";
import "./Fotos.css";
import ImgCard from "../../components/ImgCard/ImgCard";

function Fotos() {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url(./assets/img/musicFondo.png)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.2,
                    zIndex: -1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            ></div>
            <div className="fotosContainer">
                <h3>Fotos de la banda</h3>
                <section id="seccionFotos">
                    <ImgCard url="https://www.instagram.com/p/DGv6hSuMVsV" />
                    <ImgCard url="https://www.instagram.com/p/DFdVrOQISsG" />
                    <ImgCard url="https://www.instagram.com/p/C7cmRMcIb8t" />
                    <ImgCard url="https://www.instagram.com/p/C7GzPpLI1Tw" />
                    <ImgCard url="https://www.instagram.com/p/CHQqtaXFBsm/" />
                </section>
            </div>
        </>
    );
}

export default Fotos;
