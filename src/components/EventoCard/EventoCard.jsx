import React from "react";

function EventoCard({ titulo, ubicacion, img, descripcion, fecha, hora }) {
    return (
        <div>
            <article
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "white 0.1vh solid",
                    background: "rgba(0, 0, 0, 0.63)",
                    padding: "3vh",
                    borderRadius: "2vh",
                }}
            >
                <h4 style={{ fontSize: "3vh" }}>{titulo}</h4>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5vh",
                        marginTop: "2vh",
                    }}
                >
                    <img src={img} alt="" />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-around",
                        }}
                    >
                        <p>Ubicacion: {ubicacion}</p>
                        <p>Dia: {fecha}</p>
                        <p>Hora: {hora}</p>
                        <p>{descripcion}</p>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4202.281943193405!2d-0.49315429748872747!3d38.35387302128863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDIxJzE4LjUiTiAwwrAyOScyNy4yIlc!5e1!3m2!1ses!2ses!4v1741482742826!5m2!1ses!2ses"
                            style={{
                                border: "0",
                                width: "60vh",
                                height: "40vh",
                            }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default EventoCard;
