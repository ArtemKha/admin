import React from 'react';

const Module = props => {
  let edit = props.edit;

  if (props.module){
    return(
      <div className="modal">
        <div className="modal-content">
          <form onSubmit= {(event) => props.updateRow(event)}>
            <input type="text" defaultValue={edit.manufacturer}
              name="manufacturer" onChange={props.handleInputChange}/>
            <input type="text" defaultValue={edit.model}
              name="model" onChange={props.handleInputChange}/>
            <input type="text" defaultValue={edit.price}
              name="price" onChange={props.handleInputChange}/>
            <button type="submit" value="submit" className="button">Обновить</button>
          </form>
        </div>
      </div>
    );
  } else {
    return(<div></div>);
  }
}

export default Module;
