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

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      car: {
        ...this.state.car,
        [name]: value
      }
    });
  }

  updateTableNew = e => {
    e.preventDefault();
    if (this.formValidation()) {
      this.props.addRow(this.state.car);

      this.setState({
        module: '',
        car: {}
      });
    }
  }

  updateTableSearch(e) {
    e.preventDefault();
    const input = this.state.car.search;
    this.props.selectRow(input);

    this.setState({
      module: '',
      car: {}
    });
  }

  formValidation = () => {
    const car = this.state.car;
    for (let key in car){
      if (car[key].length < 1) {
        alert("All fields must be filled out.");
        return false;
      }
    }
    return true;
  }

    return (
      <div>
        <div>
          <Module
            state={this.state}
            updateTable={e => this.updateTableNew(e)}
            handleInput={e => this.handleInput(e)}
          />
          <Search
            state={this.state}
            updateTable={e => this.updateTableSearch(e)}
            handleInput={this.handleInput}
          />
        </div>
        <ul>
          <li
          onClick={this.showSearch}
          ><img src={search} alt="showSearch"/>SEARCH</li>
          <li
          onClick={this.props.showAll}
          ><img src={layers} alt="showInitialState"/>SHOW ALL</li>
          <li
            onClick={this.showNewModule}
          ><img src={add} alt="showNewModule"/>ADD NEW</li>
        </ul>
      </div>
    );
  }
}
