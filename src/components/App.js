import React from 'react';
import Table from '../containers/Table';
import Sidebar from '../containers/Sidebar';
import '../css/App.css';

const App = () => (
  <div className="App">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="table">
      <Table />
    </div>
  </div>
)

export default App
