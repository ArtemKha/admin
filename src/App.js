import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';
import Module from './Components/Module';
import ModuleNew from './Components/ModuleNew';
import Search from './Components/Search';
import CARS from './Cars';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cars: CARS.data,
      initialState: CARS.data,
      module: false,
      moduleNew: false,
      search: false,
      editIndex: '',
      edit: {},
      new: {},
      searchInput: ''
    };

    this.handleInputEdit = this.handleInputEdit.bind(this);
    this.handleInputNew = this.handleInputNew.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  showNewModule() {
    this.setState({
      moduleNew: true,
      new: {
      manufacturer: "Reno",
      model: "Fluence",
      price: 105000
      }
    });
  }

  showSearch() {
    this.setState({
      search: true,
    });
  }

  showEditModule(index) {
    this.setState({
      module: true,
      editIndex: index,
      edit: this.state.cars[index]
    });
  }

  showInitialState() {
    this.setState({
      cars: this.state.initialState
    });
  }

  updateTable(e){
    e.preventDefault();
    let state = this.state;
    let updatedCar = state.edit;
    let editIndex = state.editIndex;
    let newCarsState = state.cars;

    newCarsState.splice(editIndex, 1, updatedCar);

    this.setState({
      cars: newCarsState,
      module: false
    });
  }

  updateTableNew(e){
    e.preventDefault();
    let state = this.state;
    let newCar = state.new;
    let newCarsState = state.cars;

    newCarsState.push(newCar);

    this.setState({
      cars: newCarsState,
      moduleNew: false
    });
  }

  makeSearch(e){
    e.preventDefault();
    let input = this.state.searchInput;
    let cars = this.state.cars;

    const filteredCars = cars.filter( car => {
      input = input.toUpperCase();
      let model = car.model.toUpperCase();
      let manufacturer = car.manufacturer.toUpperCase();

      return manufacturer.startsWith(input) || model.startsWith(input);
    });

    this.setState({
      initialState: cars,
      search: false,
      searchInput: '',
      cars: filteredCars
    });
  }

  handleInputEdit(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      edit: {
        ...this.state.edit,
        [name]: value
      }
    });
  }

  handleInputNew(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      new: {
        ...this.state.new,
        [name]: value
      }
    });
  }

  handleInputSearch(e) {
    const value = e.target.value;

    this.setState({
      searchInput: value
    });
  }

  deleteRow(index) {
    let newCarsState = this.state.cars;
    newCarsState.splice(index, 1);

    this.setState({
      cars: newCarsState
    });
  }

  render() {
    // console.log([...this.state.cars]);

    return (
      <div className="App">
        <div className="sidebar">
          <Sidebar
            showNewModule={() => this.showNewModule()}
            showSearch={() => this.showSearch()}
            deleteRow={() => this.deleteRow()}
            showInitialState={() => this.showInitialState()}
          />
        </div>
        <div className="table">
          <Module
            module={this.state.module}
            edit={this.state.edit}
            updateRow={(e) => this.updateTable(e)}
            handleInputChange={this.handleInputEdit} />
          <ModuleNew
            moduleNew={this.state.moduleNew}
            new={this.state.new}
            updateTableNew={(e) => this.updateTableNew(e)}
            handleInputChange={this.handleInputNew} />
          <Search
            search={this.state.search}
            searchInput={this.state.searchInput}
            makeSearch={(e) => this.makeSearch(e)}
            handleInputChange={this.handleInputSearch}
          />
          <Table
            state={this.state}
            editRow={index => this.showEditModule(index)}
            deleteRow={index => this.deleteRow(index)} />
        </div>
      </div>
    );
  }
}

export default App;
