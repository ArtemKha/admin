import React from 'react';

const Row = ({car, showEditModule, removeRow, index, editingVisibility}) => {
  return (
    <tr>
      <td>{car.manufacturer}</td>
      <td>{car.model}</td>
      <td>{car.price}
        <div className="change-row" style={editingVisibility}>
          <span className="edit"
            onClick={showEditModule}
            >
            &#9998;
          </span>
          <span className="delete"
            onClick={() => removeRow(index)}
            >
            &#10005;
          </span>
        </div>
      </td>
    </tr>
  );
}

export default Row;
