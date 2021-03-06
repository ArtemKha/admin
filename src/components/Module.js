import React from 'react';
import PropTypes from 'prop-types';

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
            onSubmit= {e => updateTable(e)}
            >
            <input type="text"
              name="manufacturer"
              defaultValue={car.manufacturer}
              onChange={handleInput}
              placeholder="Manufacturer"
            />
            <input type="text"
              name="model"
              defaultValue={car.model}
              onChange={handleInput}
              placeholder="Model"
            />
            <input type="text"
              name="price"
              defaultValue={car.price}
              onChange={handleInput}
              placeholder="Price"
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

Module.propTypes = {
  state: PropTypes.object.isRequired,
  updateTable: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired
}

export default Module;
