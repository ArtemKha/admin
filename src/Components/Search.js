import React from 'react';

const Search = props => {

  if (props.search){
    return(
      <div className="modal">
        <div className="modal-content">
          <form onSubmit= {(event) => props.makeSearch(event)}>
            <input type="text" defaultValue={props.searchInput}
              id="search" onChange={props.handleInputChange}/>
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
