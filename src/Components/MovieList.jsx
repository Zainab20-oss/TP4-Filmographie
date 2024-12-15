
import React from 'react';
import "./css.css";
import Bouton from './MovieDetails';


const ListeFilm = ({ films, onSelectFilm }) => { return (
     
           <div className="list">
    
               {films.map((Film, index) => (
                   <div className="card" key={index}>
                       <div className="titre">{Film.title}</div>
                       <div className="genre">{Film.genre}</div>
                       <div className="anne">{Film.releaseYear}</div>
                       <div className="note">{Film.rating}</div>
                        <button onClick={() => onSelectFilm(Film)}>Read more</button>
                        
                   </div>
               ))}
           </div>
  
  );
};

export default ListeFilm;