import React, { useState } from 'react';
import ShoppingList from './conponents/ShoppingList';

const App = () => {
  const[inputItem, setInputItem] = useState('')
  const[shoppingList, setShoppingList] = useState([])

  const addItem = () => {
    if (inputItem.trim() !== '') {
      setShoppingList([
        ...shoppingList,
        inputItem
      ])
      setInputItem('')
    }
  }
    return (
      <div>
          <input type='text' value={ inputItem } onChange={ (e) => setInputItem(e.target.value) }/>
          <button onClick={ addItem }>추가</button>

          <ShoppingList shoppingList={ shoppingList } />
      </div>
  );
};

export default App;