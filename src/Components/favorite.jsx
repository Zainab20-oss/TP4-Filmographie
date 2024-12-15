import React from "react";

function ListeFilmFavoris({ film, toggleFavorite, favorites }) {
  return (
    <div>
      {film.map((movie, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
        
          <button onClick={() => toggleFavorite(movie)}>
            {favorites.includes(movie) ? "Retirer des Favoris" : "Ajouter aux Favoris"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListeFilmFavoris;
