import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Module from './Module';
import Search from './Search';

import search from '../img/search.svg';
import layers from '../img/layers.svg';
import add from '../img/add.svg';

export default class Sidebar extends Component {

  static propTypes = {
    addRow: PropTypes.func.isRequired,
    selectRow: PropTypes.func.isRequired,
    showAll: PropTypes.func.isRequired
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
      price: 70500,
      key: Math.floor(Math.random() * 10000)
      }
    });
  }

  showSearch = () => {
    this.setState({
      module: 'search',
      car: {
      search: ''
      }
    });
  }

  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      car: {
        ...this.state.car,
        [name]: value
      }
    });
  }

  updateTableNew = (e, car) => {
    e.preventDefault();
    this.props.addRow(this.state.car);

    this.setState({
      module: '',
      car: {}
    });
  }

  updateTableSearch(e){
    e.preventDefault();
    const input = this.state.car.search;
    this.props.selectRow(input);

    this.setState({
      module: '',
      car: {}
    });
  }

  render() {
    return (
      <div>
        <div>
          <Module
            state={this.state}
            updateTable={(e, car) => this.updateTableNew(e, car)}
            handleInput={e => this.handleInput(e)}
          />
          <Search
            state={this.state}
            updateTable={(e) => this.updateTableSearch(e)}
            handleInput={this.handleInput}
          />
        </div>
        <ul>
          <li
          onClick={this.showSearch}
          ><img src={search} alt="showSearch"/>ПОИСК</li>
          <li
          onClick={this.props.showAll}
          ><img src={layers} alt="showInitialState"/>ПРОСМОТР</li>
          <li
            onClick={this.showNewModule}
            ><img src={add} alt="showNewModule"/>ДОБАВИТЬ</li>
        </ul>
      </div>
    );
  }
}
