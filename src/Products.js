import React from "react";
import { useEffect, useState } from "react";
import style from "./Style";
import { createUseStyles } from "react-jss";
import ProductTableRow from "./ProductTableRow";

const useStyles = createUseStyles(style);

function Products() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setInventory(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const headers = [
      "Title",
      "Price",
      "Category",
      "Rating",
      "Inventory",
      "Revenue",
      "",
    ];
    return (
      <div className={classes.tableContent}>
        <section className={classes.productRow}>
          {headers.map((header) => (
            <h4 className={classes.tableCellHeader}>{header}</h4>
          ))}
        </section>
        {inventory.map((product, index) => (
          <ProductTableRow
            content={product}
            colored={index % 2 == 1 ? true : false}
          />
        ))}
      </div>
    );
  }
}

export default Products;
