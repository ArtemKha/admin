import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TableActionTypes from '../actions/table';

import '../css/App.css';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

class App extends Component {

  static propTypes = {
    cars: PropTypes.array.isRequired
  };

  render() {
    const {dispatch, cars} = this.props;
    const addRow = bindActionCreators(TableActionTypes.addRow, dispatch);
    const removeRow = bindActionCreators(TableActionTypes.removeRow, dispatch);
    const updateRow = bindActionCreators(TableActionTypes.updateRow, dispatch);

    return (
      <div className="App">
        <div className="sidebar">
          <Sidebar addRow={addRow}/>
        </div>
        <div className="table">
          <Table cars={cars} removeRow={removeRow} updateRow={updateRow}/>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    cars: state
  }
);

export default connect(mapStateToProps)(App);
