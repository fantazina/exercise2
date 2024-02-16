import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import styles from '../css/Shopping.module.css';

const ShoppingList = ({shoppingList, onShoppingList}) => {

    const onDeleteItem = (itemChk) => {
        const updateList = shoppingList.filter(item => item !== itemChk )
        onShoppingList(updateList)
}
    return (
        <div className={ styles.S_list}>
            <h1>지나의 장보기 목록</h1>
                {
                    shoppingList.map((item, index) => ( 
                        <ShoppingItem key={ item } item={ item } onDelItem={ onDeleteItem } /> 
                    ))
                } 
        </div>
    );
};

export default ShoppingList;