import React, { useState } from 'react';
import ImageCard from './ImageCard';
import './Gallery.css';

const Gallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="gallery">
            <button className="nav-button prev" onClick={prevImage}>
                &#8592;
            </button>

            <div className="gallery-content">
                <ImageCard
                    title={images[currentIndex].title}
                    image={images[currentIndex].image}
                    date={images[currentIndex].date}
                    location={images[currentIndex].location}
                />
            </div>

            <button className="nav-button next" onClick={nextImage}>
                &#8594;
            </button>
        </div>
    );
};

export default Gallery;