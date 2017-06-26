import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TableActionTypes from '../actions/table';
import Panel from '../components/Panel';

const mapStateToProps = state => (
  {
    cars: state.cars.filter( car => {
      const model = car.model.toUpperCase();
      const manufacturer = car.manufacturer.toUpperCase();
      return manufacturer.includes(state.filter) || model.includes(state.filter);
    }),
    filter: state.filter
  }
);

const mapDispatchToProps = dispatch => ({
  addRow: bindActionCreators(TableActionTypes.addRow, dispatch),
  removeRow: bindActionCreators(TableActionTypes.removeRow, dispatch),
  updateRow: bindActionCreators(TableActionTypes.updateRow, dispatch),
  selectRow: bindActionCreators(TableActionTypes.selectRow, dispatch),
  showAll: bindActionCreators(TableActionTypes.showAll, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
