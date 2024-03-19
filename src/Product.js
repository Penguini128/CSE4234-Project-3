import React, { useState } from "react";
import style from "./Style";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(style);

function Product({ setPopup, content }) {
  const classes = useStyles();

  console.log("hi!");

  const hide = () => {
    setPopup(false);
  };

  return (
    <div className={classes.fadeBackground}>
      <div className={classes.popupWindow}>
        <button className={classes.closePopup} onClick={hide}>
          X
        </button>
        <div className={classes.popupContent}>
          <img className={classes.productImage} src={content.image} />
          <p>{content.title}</p>
          <h2>${content.price.toFixed(2)}</h2>
          <p>
            <strong>Category:</strong> {content.category}
          </p>
          <p>
            <strong>Rating:</strong> {content.rating.rate}
          </p>
          <p>
            <strong>In stock:</strong> {content.inventory}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
