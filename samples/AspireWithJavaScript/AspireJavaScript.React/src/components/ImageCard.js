import React from 'react';
import './ImageCard.css';

const ImageCard = ({ title, image, date, location }) => {
    return (
        <div className="image-card">
            <div className="image-title">{title}</div>
            <div className="image-container">
                <img src={image} alt={title} className="photo" />
            </div>
            <div className="image-metadata">
                <div className="image-date">{date}</div>
                <div className="image-location">{location}</div>
            </div>
        </div>
    );
};

export default ImageCard;