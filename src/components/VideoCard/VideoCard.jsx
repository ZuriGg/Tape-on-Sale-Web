import React, { useState, useEffect } from "react";

function VideoCard({ videoId }) {
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
                width: "60vh",
                height: "33.8vh",
                borderRadius: "2vh",
                overflow: "hidden",
                background: "#000",
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
                            width: "70px",
                            height: "50px",
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
                            width="40px"
                            height="40px"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            top: "20px",
                            left: "10px",
                            right: "10px",
                            background: "rgba(0, 0, 0, 0.76)",
                            color: "#fff",
                            padding: "0.5vh",
                            margin: "auto",
                            width: "fit-content",
                            borderRadius: "0.5vh",
                            fontSize: "2vh",
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
                        width: "60vh",
                        height: "33.8vh",
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

export default VideoCard;
