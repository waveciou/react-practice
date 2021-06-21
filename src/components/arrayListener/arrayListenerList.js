import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const List = ({ itemsArray = [] }) => {
  useEffect(()=> {
    console.log('傳入進來的資料有更新');
  }, [itemsArray]);

  return (
    <ul>
      {
        itemsArray.map(item => {
          return (
            <li key={item.name}>
              <p>{ item.name }</p>
              <p>{ `${item.result}` }</p>
            </li>
          );
        })
      }
    </ul>
  );
};
export default List;