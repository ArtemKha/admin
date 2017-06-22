import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './../css/Transition.css';

 const Row = props => {

  return (

    <ReactCSSTransitionGroup
      component="tr"
      transitionName="slide"
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}>

      <td>{props.manufacturer}</td>
      <td>{props.model}</td>
      <td>{props.price}
        <div className="change-row" style={props.visibilityChange}>
          <span className="edit"
            onClick={() => props.editRow(props.index)}>
            &#9998;
          </span>
          <span className="delete"
            onClick={() => props.deleteRow(props.index)}>
            &#10005;
          </span>
        </div>
      </td>

    </ReactCSSTransitionGroup>
  );
};

export default Row;
