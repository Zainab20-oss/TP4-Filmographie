import React from "react";
import "./css.css";
import Bouton from './Components/MovieDetails';

const ListeFilmC = ({ title, genre, releaseYear,rating }) => {
    return (
       <div className="list">
         <div className="card" >
                       <div className="titre">{title}</div>
                       <div className="genre">{genre}</div>
                       <div className="anne">{releaseYear}</div>
                       <div className="note">{rating}</div>
                        <Bouton/>
                   </div>
       </div>
    );
};

export default ListeFilmC;
