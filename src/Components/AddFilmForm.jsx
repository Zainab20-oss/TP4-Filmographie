import React, { useState } from "react";
import './cssForm.css'
const AddFilmForm = ({ onAddFilm, onClose }) => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && director && releaseYear && genre && rating) {
            const newFilm = {
                title,
                director,
                releaseYear: Number(releaseYear),
                genre,
                rating: Number(rating)
            };
            onAddFilm(newFilm);
            setTitle('');
            setDirector('');
            setReleaseYear('');
            setGenre('');
            setRating('');
            setError('');
        } else {
            setError('All fields are required.');
        }
    };

    return (
        <>
            <div className="popup-overlay" onClick={onClose}></div> {/* Fond sombre */}
            <div className="add-film-form">
                <h2>Add a New Film</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Director"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Release Year"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                    />
                    <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Select Genre</option>
                        <option value="Crime">Crime</option>
                        <option value="Drama">Drama</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Action">Action</option>
                        <option value="Historical Drama">Historical Drama</option>
                        <option value="Comedy-Drama">Comedy-Drama</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Rating (0-10)"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <button type="submit">Add Film</button>
                    <button
                        type="button"
                        onClick={() => {
                            setTitle('');
                            setDirector('');
                            setReleaseYear('');
                            setGenre('');
                            setRating('');
                            setError('');
                        }}
                    >
                        Reset
                    </button>
                    <button type="button" onClick={onClose}>Close</button>
                </form>
            </div>
        </>
    );
};

export default AddFilmForm;
