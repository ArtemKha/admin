import React from 'react';
import Row from './Row';

 const Table = props => {
  let results = props.state.cars;

  // if (showSearchResult) {
  //   cars = props.state.searchCars;
  // } else {
  //   cars = props.state.cars;
  // }

  let cars = results.map( (car, index) =>
    <Row
      manufacturer={car.manufacturer}
      model={car.model}
      price={car.price}
      key={index}
      index={index}
      editRow={props.editRow}
      deleteRow={props.deleteRow} />
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Model</th>
          <th>Price</th>
          {/* <th>Edit</th>
          <th>Delete</th> */}
        </tr>
      </thead>
      <tbody>
        {cars}
      </tbody>
    </table>
  );
}

export default Table;
