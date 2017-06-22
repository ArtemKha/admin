import React from 'react';

const Module = ({state, updateRow, handleInputEdit}) => {
  let edit = state.edit;

  if (state.module){
    return(
      <div className="modal">
        <div className="modal-content">
          <form onSubmit= {(event) => updateRow(event)}>
            <input type="text" defaultValue={edit.manufacturer}
              name="manufacturer" onChange={handleInputEdit}/>
            <input type="text" defaultValue={edit.model}
              name="model" onChange={handleInputEdit}/>
            <input type="text" defaultValue={edit.price}
              name="price" onChange={handleInputEdit}/>
            <button type="submit" value="submit" className="button">Обновить</button>
          </form>
        </div>
      </div>
    );
  } else {
    return(<div> </div>);
  }
};

export default Module;
