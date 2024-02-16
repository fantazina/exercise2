import React, { useState } from 'react';
import styles from '../css/Shopping.module.css';

const ShoppingItem = ({item, onDelItem}) => {

    const onDeleteClick = () => {  
            onDelItem(item)
    }
    return (
        <div className={ styles.addItem }>
            { item }
            <button onClick={ onDeleteClick }>삭제</button>
        </div>
    );
};

export default ShoppingItem;