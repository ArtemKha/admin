import React from 'react';

const Search = ({state, updateTable, handleInput}) => {

  if (state.module === 'search'){
    return(
      <div className="modal">
        <div className="modal-content">
          <form onSubmit= {(event) => updateTable(event)}>
            <input type="text" defaultValue={state.searchInput}
              id="search" name="search" onChange={handleInput}/>
            <button type="submit" value="submit" className="button">Поиск</button>
          </form>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
  }
}

export default Search;
