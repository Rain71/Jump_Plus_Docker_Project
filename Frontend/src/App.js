import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import './styles.css';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/items');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleDeleteItem = (itemId) => {
        setItems(items.filter((item) => item.id !== itemId));
    };

    return (
        <div className="App">
            <h1>Shopping List</h1>
            <AddItemForm onAddItem={handleAddItem} />
            <ItemList items={items} onDeleteItem={handleDeleteItem} />
        </div>
    );
};

export default App;
