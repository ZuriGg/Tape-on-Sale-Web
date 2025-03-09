import React from "react";
import "./Videos.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import ShortCard from "../../components/ShortCard/ShortCard";
import VideoCardRedux from "../../components/VideoCard/VideoCardRedux";
import VideoInstagramCard from "../../components/ImgCard/videoInstagramCard";

function Videos() {
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
            <div className="videosContainer">
                <section id="seccionMusica">
                    <h3>Música</h3>
                    <div id="articlesMusica">
                        <VideoCardRedux videoId="3geSc64DFvM" />
                        <VideoCardRedux videoId="fpPprUE-l_Q" />
                        <VideoCardRedux videoId="uhTpKOCU2RQ" />
                        <VideoCardRedux videoId="eGA57giFLsQ" />
                        <VideoCardRedux videoId="UiIfZmegj9U" />
                        <VideoCardRedux videoId="uoCd6o8Id3E" />
                        <VideoCardRedux videoId="k7k1rca_Fe0" />
                        <VideoCardRedux videoId="Ac6hPTU7MhU" />
                        <VideoCardRedux videoId="9u2YydmW8lE" />
                        <VideoCardRedux videoId="l2iPNVuj5nk" />
                    </div>
                </section>
                <section id="seccionVideos">
                    <h3>Vídeos</h3>
                    <div id="articlesVideos">
                        <VideoCard videoId="8zBHItoigkw" />
                        <VideoCard videoId="W_SoJRbJSYs" />
                    </div>
                </section>
                <section id="seccionShorts">
                    <h3>Shorts</h3>
                    <div id="articlesShorts">
                        <ShortCard videoId="uGWhyZx9cjw" />
                        <ShortCard videoId="QIYXwEKXLn8" />
                        <ShortCard videoId="ZcxpCBQzVO0" />
                        <ShortCard videoId="c2MtuqU9-pM" />
                        <ShortCard videoId="eAxFvfGfFNY" />
                        <ShortCard videoId="2xINQ34c2SI" />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Videos;
