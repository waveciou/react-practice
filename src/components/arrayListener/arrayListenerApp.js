import React, { useState } from 'react';
import List from './arrayListenerList';

const App = () => {
  const [ itemsArray, setItemsArray ] = useState([]);

  return (
    <div>
      <div>
        <button onClick={
          () => {
            let _itemsArray = [...itemsArray];
            const date = new Date();
            _itemsArray.push({
              name: date.getTime(),
              result: false
            });
            setItemsArray(_itemsArray);
          }
        }>Add Item</button>
      </div>
      <List itemsArray={itemsArray} />
    </div>
  );
};
export default App;