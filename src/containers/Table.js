import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TableActionTypes from '../actions/table';
import Table from '../components/Table/Table';

const mapStateToProps = state => (
  {
    cars: state.clients.filter( car => {
      const model = car.model.toUpperCase();
      const manufacturer = car.manufacturer.toUpperCase();
      return manufacturer.includes(state.filter) || model.includes(state.filter);
    }),
    editingVisibility: state.editingVisibility
  }
);

const mapDispatchToProps = dispatch => ({
  removeRow: bindActionCreators(TableActionTypes.removeRow, dispatch),
  updateRow: bindActionCreators(TableActionTypes.updateRow, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
