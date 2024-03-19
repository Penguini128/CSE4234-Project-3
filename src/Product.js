import React, { useState } from "react";
import style from "./Style";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(style);

function Product({setPopup}) {

  const classes = useStyles();

  console.log("hi!");

  const hide = () => { setPopup(false) }

  return (
    <div className={classes.fadeBackground}>
        <div className={classes.popupWindow}>
            <button className={classes.closePopup} onClick={hide}>X</button>
            <div className={classes.popupContent}>
                <h1>Some Popup Content</h1>
            </div>
        </div>
    </div>
  );
}

export default Product;
