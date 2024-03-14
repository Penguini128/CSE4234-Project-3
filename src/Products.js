import React from 'react';
import {useEffect, useState} from 'react';
//export default Products;

function Products() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [inventory, setInventory] = useState([]);

    useEffect(() => {

        fetch("products.json")
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setInventory(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div> Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="product-content">
                <ul>
                    {inventory.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating.rate}</p>
                        <p>Inventory: ${product.inventory}</p>
                        <p>Revenue: ????? </p>
                        <p>Button: goes here</p>
                    </li>
                   ))}
                </ul>
            </div>
        )
    }
}

export default Products;