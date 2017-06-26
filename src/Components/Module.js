import React from 'react';

const Module = ({state, updateTable, handleInput}) => {
  const car = state.car;
  const isEditing = (state.module === "edit");
  const isAdding = (state.module === "new");

  if (isEditing || isAdding){
    let button;

    isEditing ? button = 'Обновить' : button = 'Добавить';

    return(
      <div className="modal">
        <div className="modal-content">
          <form
            onSubmit= {(e, car) => updateTable(e, car)}
            >
            <input type="text"
              name="manufacturer"
              defaultValue={car.manufacturer}
              onChange={handleInput}
            />
            <input type="text"
              name="model"
              defaultValue={car.model}
              onChange={handleInput}
            />
            <input type="text"
              name="price"
              defaultValue={car.price}
              onChange={handleInput}
            />
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
