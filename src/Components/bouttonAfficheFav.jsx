
import React from 'react';
import './css.css'
function ShowFav({onClick}){

  return (
      <div>
        <button className="Ajt"onClick={onClick}>Show Favorite Films</button>
      </div>
  );
};

export default ShowFav;
