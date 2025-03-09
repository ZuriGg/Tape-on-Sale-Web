import React, { useEffect } from "react";

function VideoInstagramCard({ url }) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

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
                width: "15vh",
                minWidth: "36vh",
            }}
        ></blockquote>
    );
}

export default VideoInstagramCard;
