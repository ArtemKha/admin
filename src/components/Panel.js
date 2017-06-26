import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import '../css/App.css';

export default class Panel extends Component {
  static propTypes = {
    cars: PropTypes.array.isRequired,
    addRow: PropTypes.func.isRequired,
    removeRow: PropTypes.func.isRequired,
    updateRow: PropTypes.func.isRequired
  };

  render() {
    const props = this.props;

    return (
      <div className="App">
        <div className="sidebar">
          <Sidebar addRow={props.addRow}/>
        </div>
        <div className="table">
          <Table cars={props.cars} removeRow={props.removeRow} updateRow={props.updateRow}/>
        </div>
      </div>
    );
  }
};
