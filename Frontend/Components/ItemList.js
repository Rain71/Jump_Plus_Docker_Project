import React from 'react';
import Item from './Item';

const ItemList = ({ items, onDeleteItem }) => {
    return (
        <ul>
            {items.map((item) => (
                <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
            ))}
        </ul>
    );
};

export default ItemList;
