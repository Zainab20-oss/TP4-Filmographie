import React from "react";
import ListeFilmC from "./movieDetailsC";

const Lister = ({ film }) => {
    return (
        <div>
            {film.map((Film, index) => {
                return (
                    <ListeFilmC
                        key={index}
                        title={Film.title}
                        genre={Film.genre}
                        releaseYear={Film.releaseYear} 
                        rating={Film.rating} 
                    />
                );
            })}
        </div>
    );
};

export default Lister;
