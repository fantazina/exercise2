import React from 'react';
import styles from '../css/Shopping.module.css';

const ShoppingItem = ({item, index, shoppingList, onShoppingList}) => {

    const onDeleteItem = (a) => {
        const updateList = shoppingList.filter((item,index) => index !== a )
        onShoppingList(updateList)
    }

    return (
        <div>
            <div className={ styles.addItem }>
                { item }
                <button onClick={ () => onDeleteItem(index) }>삭제</button>
            </div>
        </div>
    );
};

export default ShoppingItem;