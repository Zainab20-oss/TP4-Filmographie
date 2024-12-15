

import React, { useState } from 'react';
import './css.css'

const Rechercher = (props) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    props.onSearch(search);
  };

  return (
    <form className="recherche">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un film..."
      />
      <input
        type="button"
        value="Rechercher"
        onClick={handleSearch}
      />
    </form>
  );
};

export default Rechercher;