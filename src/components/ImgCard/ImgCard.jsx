import React, { useEffect } from "react";

const ImgCard = ({ url }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Una vez que el script se haya cargado, se ejecuta el código de incrustación de Instagram
            window.instgrm.Embeds.process();
        };

        return () => {
            // Limpiar el script después de que el componente se desmonte
            document.body.removeChild(script);
        };
    }, [url]); // Solo se ejecuta cuando el URL cambia

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
                background: "#FFF",
                border: "0",
                borderRadius: "3vh",
                boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                padding: "0",
                width: "50vh",
                minWidth: "46vh",
            }}
        ></blockquote>
    );
};

export default ImgCard;
