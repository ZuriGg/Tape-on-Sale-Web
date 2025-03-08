import React, { useState, useEffect } from "react";

function VideoCardRedux({ videoId }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [title, setTitle] = useState("Cargando...");

    useEffect(() => {
        fetch(
            `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`
        )
            .then((res) => res.json())
            .then((data) => setTitle(data.title))
            .catch(() => setTitle("Video de YouTube"));
    }, [videoId]);

    return (
        <article
            style={{
                position: "relative",
                overflow: "hidden",
                background: "#000",
                borderRadius: "2vh",
                border: "none",
                width: "28vh",
                height: "15.3vh",
            }}
        >
            {!isLoaded ? (
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                    onClick={() => setIsLoaded(true)}
                >
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: "50px",
                            height: "35px",
                            background: "rgba(255, 0, 0, 0.7)",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            width="28px"
                            height="28px"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            top: "5px",
                            left: "10px",
                            right: "10px",
                            background: "rgba(0, 0, 0, 0.76)",
                            color: "#fff",
                            padding: "0.5vh",
                            margin: "auto",
                            width: "fit-content",
                            borderRadius: "0.5vh",
                            fontSize: "1.5vh",
                            textAlign: "center",
                        }}
                    >
                        {title}
                    </div>
                </div>
            ) : (
                <iframe
                    style={{
                        borderRadius: "2vh",
                        border: "none",
                        width: "28vh",
                        height: "15.3vh",
                    }}
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            )}
        </article>
    );
}

export default VideoCardRedux;
