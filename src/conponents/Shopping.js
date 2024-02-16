import React, { useState } from 'react';
import styles from '../css/Shopping.module.css';
import ShoppingList from './ShoppingList';

const Shopping = () => {
    const[inputItem, setInputItem] = useState('')
    const[shoppingList, setShoppingList] = useState([])
  
    const onInputItem = (e) => {
      const{ value } = e.target //입력할 value값 가져오기
        setInputItem(value) // inputItem에 value갑 보내기
    }

    const onShoppingList = (item) => {
        setShoppingList(item)
    }
  
    const addItem = () => {
      if(inputItem !== '') { 
      setShoppingList([...shoppingList, inputItem]) // 새로운 값을 추가(shoppingList, inputItem)
      setInputItem('') // 입력 후 input창 초기화
  
      } else {
        alert('추가 내용 입력하기')
      }
    }
  
      return (
        <div className={ styles.S_list }>
            <input type='text' value={ inputItem } onChange={ onInputItem }/>
            <button onClick={ addItem }>추가</button>
  
            <ShoppingList shoppingList={ shoppingList } onShoppingList={ onShoppingList } />
        </div>
    );
  };

export default Shopping;