import React from 'react';
import axios from 'axios';

const Item = ({ item, onDeleteItem }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/items/${item.id}`);
            onDeleteItem(item.id);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <li>
            {item.name}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default Item;

