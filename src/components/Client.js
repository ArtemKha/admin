import React from 'react';
import Table from '../containers/Table';

const Clents = () => {
  return (
    <div>
      <div className="controlBar">
        <button className="button">Search</button>
        <button className="button">New Client</button>
        <button className="button">Show All</button>
      </div>
      <Table />
    </div>
  );
}

export default Clents;
