import React from "react";
import "./Eventos.css";
import EventoCard from "../../components/EventoCard/EventoCard";

function Eventos() {
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
            <div className="eventosContainer">
                <h3>Próximos eventos</h3>

                <section>
                    <EventoCard
                        titulo="Festival Alacant Desperta 2025"
                        ubicacion="Parque del Tossal en Alicante"
                        img="./assets/img/eventoAlacantDesperta.webp"
                        descripcion='Concierto en el festival Alacant Desperta en el parque "Tossal" en Alicante'
                        fecha="10 de mayo de 2025"
                        hora="22:00h"
                    />
                </section>
            </div>
        </>
    );
}

export default Eventos;
