import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TableActionTypes from '../actions/table';
import Sidebar from '../components/Sidebar';

const mapDispatchToProps = dispatch => ({
  addRow: bindActionCreators(TableActionTypes.addRow, dispatch),
  selectRow: bindActionCreators(TableActionTypes.selectRow, dispatch),
  showAll: bindActionCreators(TableActionTypes.showAll, dispatch)
});

export default connect(mapDispatchToProps)(Sidebar);
