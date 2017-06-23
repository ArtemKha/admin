import React, { Component } from 'react';
import './css/App.css';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';
import Module from './Components/Module';
import Search from './Components/Search';
import CARS from './Cars';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cars: CARS.data,
      initialState: CARS.data,
      module: 'none',
      editIndex: '',
      edit: {},
      new: {},
      search: {},
      visibilityChange: { visibility: 'visible'}
    };

    this.handleInput = this.handleInput.bind(this);
  }

  showNewModule() {
    this.setState({
      module: 'new',
      new: {
      manufacturer: "Reno",
      model: "Fluence",
      price: 105000
      }
    });
  }

  showEditModule(index) {
    this.setState({
      module: 'edit',
      editIndex: index,
      edit: this.state.cars[index]
    });
  }

  showSearch() {
    this.setState({
      module: 'search',
      visibilityChange: { visibility: 'visible'},
      cars: this.state.initialState
    });
  }

  showInitialState() {
    this.setState({
      visibilityChange: { visibility: 'visible'},
      cars: this.state.initialState
    });
  }

  updateTable(e){
    e.preventDefault();
    const state = this.state;
    const newCarsState = [...state.cars];

    if (state.module === 'edit') {
      const updatedCar = state.edit;
      const editIndex = state.editIndex;
      newCarsState.splice(editIndex, 1, updatedCar);
    } else {
      const newCar = state.new;
      newCarsState.push(newCar);
    }

    this.setState({
      cars: newCarsState,
      module: 'none'
    });
  }

  updateTableSearch(e){
    e.preventDefault();
    let input = this.state.search.searchInput.toUpperCase();
    const cars = this.state.cars;
    console.log(input);
    const filteredCars = cars.filter( car => {
      const model = car.model.toUpperCase();
      const manufacturer = car.manufacturer.toUpperCase();

      return manufacturer.startsWith(input) || model.startsWith(input);
    });

    this.setState({
      visibilityChange: { visibility: 'hidden'},
      initialState: cars,
      module: 'none',
      search: {
        searchInput: ''
      },
      cars: filteredCars
    });
  }

  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const module = this.state.module;

    this.setState({
      [module]: {
        ...this.state[module],
        [name]: value
      }
    });
  }

  deleteRow(index) {
    let newCarsState = [...this.state.cars];
    newCarsState.splice(index, 1);

    this.setState({
      cars: newCarsState,
      initialState: newCarsState
    });
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <Sidebar
            showNewModule={() => this.showNewModule()}
            showSearch={() => this.showSearch()}
            showInitialState={() => this.showInitialState()}
          />
        </div>
        <div className="table">
          <Module
            state={this.state}
            updateTable={(e) => this.updateTable(e)}
            handleInput={this.handleInput}
          />
          <Search
            state={this.state}
            updateTable={(e) => this.updateTableSearch(e)}
            handleInput={this.handleInput}
          />
          <Table
            state={this.state}
            editRow={index => this.showEditModule(index)}
            deleteRow={index => this.deleteRow(index)}
            visibilityChange={this.state.visibilityChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
