import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";

function App() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "Tape on Sale - Home";
        } else if (location.pathname === "/tapeonsale") {
            document.title = "Tape on Sale - About";
        } else if (location.pathname === "/musica") {
            document.title = "Tape on Sale - Música";
        } else if (location.pathname === "/fotos") {
            document.title = "Tape on Sale - Fotos";
        } else if (location.pathname === "/videos") {
            document.title = "Tape on Sale - Vídeos";
        } else if (location.pathname === "/eventos") {
            document.title = "Tape on Sale - Eventos";
        } else {
            document.title = "Tape on Sale";
        }
    }, [location]);

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route index path="about" element={<About />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
