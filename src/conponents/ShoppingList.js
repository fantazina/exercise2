import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import styles from '../css/Shopping.module.css';

const ShoppingList = ({shoppingList, onShoppingList}) => {

    return (
        <div className={ styles.S_list}>
            <h1>지나의 장보기 목록</h1>
                {
                    shoppingList.map((item, index) => ( 
                        <ShoppingItem key={ index } item={ item } index={index} 
                            shoppingList={shoppingList} onShoppingList={onShoppingList} /> 
                    ))
                } 
        </div>
    );
};

export default ShoppingList;