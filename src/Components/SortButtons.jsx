
import React from 'react';
function Trie({onClickN,onClickA}){

  return (
      <div className="trie">
      <button onClick={onClickN} >Trie par Note</button>
      <button onClick={onClickA} >Trie par année</button>
      </div>
  );
};

export default Trie;
