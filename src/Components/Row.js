import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/Transition.css';

 const Row = ({car, showEditModule, removeRow, index}) => {

  return (
    <ReactCSSTransitionGroup
      component="tr"
      transitionName="slide"
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionEnter={false}
      transitionAppearTimeout={500}>

      <td>{car.manufacturer}</td>
      <td>{car.model}</td>
      <td>{car.price}
        <div className="change-row">
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

    </ReactCSSTransitionGroup>
  );
}

export default Row;
