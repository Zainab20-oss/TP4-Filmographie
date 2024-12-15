
import React from 'react';
import './css.css';

const FavoritesPopup = ({ favorites, onClose }) => {
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="popup">
                <h2>Favorite Films</h2>
                <ul>
                    {favorites.map((film, index) => (
                        <li key={index}>{film.title}</li>
                    ))}
                </ul>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </>
    );
};

export default FavoritesPopup;
