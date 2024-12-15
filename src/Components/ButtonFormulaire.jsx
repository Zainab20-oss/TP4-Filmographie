
import React from 'react';
import './css.css'
function ShowForm({onClick}){

  return (
      <div>
        <button className="Fav"onClick={onClick}>Ajouter un film</button>
      </div>
  );
};

export default ShowForm;
