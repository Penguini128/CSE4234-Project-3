import React from "react";
import style from "./Style";
import { createUseStyles } from "react-jss";
import ProductTableRow from "./ProductTableRow";

const useStyles = createUseStyles(style);

const Products = ({ inventory }) => {
  const classes = useStyles();

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
          <h4 key={header} className={classes.tableCellHeader}>
            {header}
          </h4>
        ))}
      </section>
      {inventory.map((product, index) => (
        <ProductTableRow
          key={product.title}
          content={product}
          colored={index % 2 == 1 ? true : false}
        />
      ))}
    </div>
  );
};

export default Products;
