import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Module from './Module';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/Transition.css';

export default class Sidebar extends Component {

  static propTypes = {
    cars: PropTypes.array.isRequired,
    removeRow: PropTypes.func.isRequired,
    updateRow: PropTypes.func.isRequired
  };

  state = {
    index: -1,
    module: '',
    car: {}
  };

  showEditModule = (index, {manufacturer, model, price}) => {
    this.setState({
      module: 'edit',
      index: index,
      car: {
      manufacturer,
      model,
      price
      }
    });
  }

  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(this.state.car);

    this.setState({
      car: {
        ...this.state.car,
        [name]: value
      }
    });
  }

  updateRow = (e, car) => {
    e.preventDefault();
    this.props.updateRow(this.state.index, this.state.car);

    this.setState({
      module: ''
    });
  }

  render() {
    const cars = this.props.cars.map((car, index) =>
      <Row
        car={car}
        showEditModule={() => this.showEditModule(index, car)}
        removeRow={this.props.removeRow}
        index={index}
        editingVisibility={this.props.editingVisibility}
        key={car.key}
      />
    );

    return (
      <div>
        <Module
          state={this.state}
          updateTable={(e, car) => this.updateRow(e, car)}
          handleInput={e => this.handleInput(e)}/>
        <table>
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Price</th>
            </tr>
          </thead>
          <ReactCSSTransitionGroup
            component="tbody"
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}
            >
            {cars}
          </ReactCSSTransitionGroup>
        </table>
      </div>
    );
  };
}
