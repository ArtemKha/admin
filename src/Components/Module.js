import React from 'react';

const Module = ({module, car, updateTable}) => {

  if (module){
    let button;

    module === 'edit' ? button = 'Обновить' : button = 'Добавить';

    return(
      <div className="modal">
        <div className="modal-content">
          <form
            onSubmit= {(e, car) => updateTable(e, car)}
            >
            <input type="text"
              name="manufacturer"
              defaultValue={car.manufacturer}
              // onChange={handleInput}
            />
            <input type="text"
              name="model"
              defaultValue={car.model}
              // onChange={handleInput}
            />
            <input type="text"
              name="price"
              defaultValue={car.price}
              // onChange={handleInput}
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
