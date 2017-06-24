import React, { Component } from 'react';
import Module from './Module';
import PropTypes from 'prop-types';

import search from '../img/search.svg';
import layers from '../img/layers.svg';
import add from '../img/add.svg';

export default class Sidebar extends Component {

  static propTypes = {
    addRow: PropTypes.func.isRequired
  };

  state = {
    module: '',
    car: {}
  };

  showNewModule = () => {
    this.setState({
      module: 'new',
      car: {
      manufacturer: "Manufacturer",
      model: "Model",
      price: 99999
      }
    });
  }

  _onSubmit = (e, car) => {
    e.preventDefault();
    this.props.addRow(this.state.car);

    this.setState({
      module: ''
    });
  }

  render() {
    return (
      <div>
        <Module module={this.state.module} car={this.state.car} updateTable={(e, car) => this._onSubmit(e, car)}/>
        <ul>
          <li
          // onClick='{}'
          ><img src={search} alt="showSearch"/>ПОИСК</li>
          <li
          // onClick='{}'
          ><img src={layers} alt="showInitialState"/>ПРОСМОТР</li>
          <li
            onClick={this.showNewModule}
            ><img src={add} alt="showNewModule"/>ДОБАВИТЬ</li>
        </ul>
      </div>
    );
  }
}
