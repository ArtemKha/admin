import React from 'react';
import PropTypes from 'prop-types';

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

Row.propTypes = {
  car: PropTypes.object.isRequired,
  showEditModule: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  editingVisibility: PropTypes.object.isRequired
};

export default Row;
