import React from 'react';
import Table from '../containers/Table';
import Sidebar from '../containers/Sidebar';
import Client from './Client';
import '../css/App.css';

const App = () => (
  <div className="App">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="table">
      <Client />
    </div>
  </div>
)

export default App
