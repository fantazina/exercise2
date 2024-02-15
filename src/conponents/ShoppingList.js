import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = () => {
    const[shoppingList,setShoppingList] = useState([])

    const onDeleteSet = (itemDelete) => {
        const updateItem = shoppingList.filter(item => item !== itemDelete)
        setShoppingList(updateItem)
    }
    return (
        <div>
            <h1>지나의 장보기 목록</h1>
                {
                    shoppingList.map((item, index) => ( 
                        <ShoppingItem key={ index } item={ item } onDelete={ onDeleteSet } /> 
                    ))
                }
        </div>
    );
};

export default ShoppingList;