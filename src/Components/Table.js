import React from 'react';
import Row from './Row';

 const Table = props => {
  let results = props.state.cars;

  let cars = results.map( (car, index) =>
    <Row
      manufacturer={car.manufacturer}
      model={car.model}
      price={car.price}
      key={index}
      index={index}
      editRow={props.editRow}
      visibilityChange={props.visibilityChange}
      deleteRow={props.deleteRow} />
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Model</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars}
      </tbody>
    </table>
  );
}

Table.propTypes = {

};

export default Table;
