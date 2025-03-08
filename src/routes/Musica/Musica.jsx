import React from "react";
import "./Musica.css";

function Musica() {
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
            <div className="musicaContainer">
                <h3>Lanzamientos de Tape on Sale</h3>
                <section id="musicSection">
                    <article>
                        <h4>Compressor (Álbum)</h4>
                        <iframe
                            style={{
                                borderRadius: "2vh",
                                border: "none",
                                width: "60vh",
                                height: "50vh",
                            }}
                            src="https://open.spotify.com/embed/album/5FtGqF6I2DwV1pIixj3QsV?utm_source=generator&theme=0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </article>
                    <article>
                        <h4>Time to Fly (Sencillo - Demo)</h4>
                        <iframe
                            style={{
                                borderRadius: "2vh",
                                border: "none",
                                width: "60vh",
                                height: "50vh",
                            }}
                            src="https://open.spotify.com/embed/album/1A45vtConyj2XQtifSSzyd?utm_source=generator&theme=0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </article>
                </section>
            </div>
        </>
    );
}

export default Musica;
