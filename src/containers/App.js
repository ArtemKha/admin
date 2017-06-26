import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TableActionTypes from '../actions/table';
import Panel from '../components/Panel';

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
    <Panel
      cars={cars}
      addRow={addRow}
      removeRow={removeRow}
      updateRow={updateRow}
    />
    );
  }
};

const mapStateToProps = state => (
  {
    cars: state
  }
);

export default connect(mapStateToProps)(App);
