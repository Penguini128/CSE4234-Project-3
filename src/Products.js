import React from 'react';
import {useEffect, useState} from 'react';
import style from './Style';
import { createUseStyles } from 'react-jss';
import Product from './Product';

const useStyles = createUseStyles(style)

function Products() {
    const classes = useStyles();
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
            <div className={classes.productContent}>
                <div className={classes.productRow}>
                    <h4 className={classes.productCellHeader}>Title</h4>
                    <h4 className={classes.productCellHeader}>Price</h4>
                    <h4 className={classes.productCellHeader}>Category</h4>
                    <h4 className={classes.productCellHeader}>Rating</h4>
                    <h4 className={classes.productCellHeader}>Inventory</h4>
                    <h4 className={classes.productCellHeader}>Revenue</h4>
                    <h4 className={classes.productCellHeader}> </h4>
                </div>
                { inventory.map((product, index) => (
                    <Product content={product} colored={index % 2 == 1 ? true : false}/>
                ))}
            </div>
        )
    }
}

export default Products;