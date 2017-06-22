import React from 'react';

 const Row = props => {


  return (
    <tr>
      <td>{props.manufacturer}</td>
      <td>{props.model}</td>
      <td>{props.price}
      <div className="change-row">
        <a className="edit"
          onClick={() => props.editRow(props.index)}>
          ✎
        </a>
        <a className="delete"
          onClick={() => props.deleteRow(props.index)}>
          ✖
        </a>
      </div>
    </td>
    </tr>
  );
}

export default Row;
