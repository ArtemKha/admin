import React from 'react';

const Module = ({state, updateTable, handleInput}) => {

  if (state.module){
    const car = state[state.module];
    let button;

    state.module === 'edit' ? button = 'Обновить' : button = 'Добавить';

    return(
      <div className="modal">
        <div className="modal-content">
          <form onSubmit= {(event) => updateTable(event)}>
            <input type="text" defaultValue={car.manufacturer}
              name="manufacturer" onChange={handleInput}/>
            <input type="text" defaultValue={car.model}
              name="model" onChange={handleInput}/>
            <input type="text" defaultValue={car.price}
              name="price" onChange={handleInput}/>
            <button type="submit" value="submit" className="button">{button}</button>
          </form>
        </div>
      </div>
    );
  } else {
    return(<div> </div>);
  }
};

export default Module;
