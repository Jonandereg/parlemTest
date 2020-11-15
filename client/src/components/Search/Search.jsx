import React, { useState } from 'react';

function Search (Props) {
  const [id, setId] = useState('');
  function handleChange (e) {
    e.preventDefault();
    setId(e.target.value);
  }
  return (
    <div className="search-container">
      <form
        onSubmit={(e) => {
          Props.handleSubmit(e, id);
        }}
      >
        <input type="text" onChange={handleChange} value={id}></input>
        <button> Search Customer</button>
      </form>
    </div>
  );
}

export default Search;
