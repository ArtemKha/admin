import React from 'react';

const ModuleNew = props => {

  let newCar = props.new;

  if (props.moduleNew){
    return(
      <div className="modal">
        <div className="modal-content">
          <form onSubmit= {(event) => props.updateTableNew(event)}>
            <input type="text" defaultValue={newCar.manufacturer}
              name="manufacturer" onChange={props.handleInputChange}/>
            <input type="text" defaultValue={newCar.model}
              name="model" onChange={props.handleInputChange}/>
            <input type="text" defaultValue={newCar.price}
              name="price" onChange={props.handleInputChange}/>
            <button type="submit" value="submit" className="button">Добавить</button>
          </form>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
  }
}

export default ModuleNew;
