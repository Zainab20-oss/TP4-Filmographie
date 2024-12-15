import React from 'react';
import './popup.css';

const MovieDetails = ({ film, onAddFavorite, onClose }) => {
    if (!film) {
        return null;
    }

    return (
        <>
            <div className="popup-overlay" onClick={onClose}></div>
            <div className="popup">
                <h2>Film Details</h2>
                <p><strong>Title:</strong> {film.title}</p>
                <p><strong>Director:</strong> {film.director}</p>
                <p><strong>Release Year:</strong> {film.releaseYear}</p>
                <p><strong>Genre:</strong> {film.genre}</p>
                <p><strong>Rating:</strong> {film.rating}</p>
                <button className="close-btn" onClick={onClose}>Close</button>
                <button className="close-btn" onClick={() => onAddFavorite(film)}>Add to Favorites</button>
            </div>
        </>
    );
};

export default MovieDetails;
