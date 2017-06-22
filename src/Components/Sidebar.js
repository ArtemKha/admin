import React from 'react';
import search from '../img/search.svg';
import layers from '../img/layers.svg';
import add from '../img/add.svg';
import trash from '../img/trash.svg';

 const Table = props => {
  return (
    <ul>
      <li onClick={props.showSearch}><img src={search} alt="showSearch"/>ПОИСК</li>
      <li onClick={props.showInitialState}><img src={layers} alt="showInitialState"/>ПРОСМОТР</li>
      {/* <li>Изменить</li> */}
      <li onClick={props.deleteRow}><img src={trash} alt="deleteRow"/>УДАЛИТЬ</li>
      <li onClick={props.showNewModule}><img src={add} alt="showNewModule"/>ДОБАВИТЬ</li>
    </ul>
  );
}

export default Table;
