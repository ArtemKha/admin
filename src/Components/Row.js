import React from 'react';

 const Row = props => {

  return (
    <tr>
      <td>{props.manufacturer}</td>
      <td>{props.model}</td>
      <td>{props.price}
      <div className="change-row" style={{visibility: props.visibilityChange}}>
        <a className="edit"
          onClick={() => props.editRow(props.index)}>
          &#9998;
        </a>
        <a className="delete"
          onClick={() => props.deleteRow(props.index)}>
          &#10005;
        </a>
      </div>
    </td>
    </tr>
  );
}

export default Row;
