import React, { useState } from 'react';
import styles from '../css/Shopping.module.css';

const ShoppingItem = ({item, onDelete}) => {

    const onDelClick = () => {  
        onDelete(item)
    }
    return (
        <div className={ styles.addItem }>
            { item }
            <button onClick={ onDelClick }>삭제</button>
        </div>
    );
};

export default ShoppingItem;