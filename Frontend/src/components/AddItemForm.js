import React, { useState } from 'react';
import axios from 'axios';

const AddItemForm = ({ onAddItem }) => {
    const [itemName, setItemName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (itemName.trim()) {
            try {
                const response = await axios.post('http://localhost:5000/items', { name: itemName });
                if (response.status === 201) {
                    onAddItem(response.data);
                    setItemName('');
                }
            } catch (error) {
                console.error('Error adding item:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Add new item"
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddItemForm;
