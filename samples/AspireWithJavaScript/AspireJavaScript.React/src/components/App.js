import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./Gallery";

// Import your images
import mountainsImage from "..//images//mountains.jpg";
import photoImage from "..//images//photo.jpg";
import snowyImage from "..//images//snowy.jpg";

function App() {

    // Sample data with imported images
    const photoCollection = [
        {
            title: "In the mountains",
            image: mountainsImage,
            date: "09/01/2024",
            location: "Tolmie Peak, WA"
        },
        {
            title: "Golden Hour",
            image: photoImage,
            date: "08/15/2024",
            location: "St. Augustine, FL"
        },
        {
            title: "The snowy neighborhood",
            image: snowyImage,
            date: "02/01/2025",
            location: "Seattle, WA"
        },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <div className="header-container">
                    <h1>Sebastian Octavio Hernandez</h1>
                    <p className="subheader">The film photos that made me do a double take</p>
                </div>
            </header>
            <main className="gallery-container">
                <Gallery images={photoCollection} />
            </main>
        </div>
    );
}

export default App;