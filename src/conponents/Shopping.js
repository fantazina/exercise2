import React, { useRef, useState } from 'react';
import styles from '../css/Shopping.module.css';
import ShoppingList from './ShoppingList';

const Shopping = () => {
    const [inputItem, setInputItem] = useState('')
    const [shoppingList, setShoppingList] = useState([])
    const inputRef = useRef(null)
    const [ListReset, setListReset] = useState('')
  
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

      inputRef.current.focus() //input창 포커스
  
      } else {
        alert('추가 내용 입력하기')
      }
    }

    const onListReset = () => {
        onShoppingList([])
    }
  
      return (
        <div className={ styles.S_list }>
            <input type='text' value={ inputItem } onChange={ onInputItem } ref={ inputRef } />
            <button onClick={ addItem }>추가</button>
            <ShoppingList shoppingList={ shoppingList } onShoppingList={ onShoppingList } />

            { shoppingList.length > 0 && 
                <div className={ styles.S_list }> 
                    <button className={ styles.reset_btn } onClick={ onListReset }>취소</button>
                </div>
            }
        </div>
    );
  };

export default Shopping;