import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Module from './Module';

export default class Sidebar extends Component {

  static propTypes = {
    cars: PropTypes.array.isRequired,
    removeRow: PropTypes.func.isRequired,
    updateRow: PropTypes.func.isRequired
  };

  state = {
    cars: this.props.cars,
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

  render() {
    const cars = this.state.cars.map((car, index) =>
      <Row
        car={car}
        showEditModule={() => this.showEditModule(index, car)}
        removeRow={this.props.removeRow}
        index={index}
        key={index}
      />
    );

    return (
      <div>
        <Module module={this.state.module} car={this.state.car}/>
        <table>
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cars}
          </tbody>
        </table>
      </div>
    );
  };
}
